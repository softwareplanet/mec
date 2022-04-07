importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js')

workbox.core.setCacheNameDetails({ prefix: "gatsby-plugin-offline" });

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

let { NavigationRoute, registerRoute } = workbox.routing
let { cleanupOutdatedCaches, matchPrecache, PrecacheRoute, PrecacheController } = workbox.precaching
let { clientsClaim } = workbox.core

self.skipWaiting()
clientsClaim()

const postMessageOnCacheDidUpdate = {
  // cachedResponseWillBeUsed: async (e) => {
  //     notifyClients({
  //       type: 'Cached_Response_Will_Be_Used',
  //       cached: ++cached,
  //       total: manifest.length
  //     })
  // },
  cacheDidUpdate: async (e) => {
    notifyClients({
      type: 'CACHE_DID_UPDATE',
      cached: ++cached,
      total: totalSize
    })
  }
}

async function notifyClients(message) {
  let clients = await self.clients.matchAll({ includeUncontrolled: true });
  clients.forEach(client => client.postMessage(message))
}

let cached = 0;
let totalSize = 0;
let manifest = self.__WB_MANIFEST;

const precacheController = new PrecacheController(
  {
    plugins: [postMessageOnCacheDidUpdate]
  }
)


precacheController.addToCacheList(manifest)
registerRoute(new PrecacheRoute(precacheController));
registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET'); // ?
registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

self.addEventListener('install', async (event) => {
  /*  To Do:
   *  compare installed cache with manifest and subtract (Manifest - Cache)
   *  total = (Manifest / Cache)
   *  
   */
  await event.waitUntil(precacheController.install(event));
  let cache = await caches.open('gatsby-plugin-offline-precache-v2-http://localhost:9080/');
  let keys = new Set((await cache.keys()).map(r => {
    return r.url
  }))

  let total = manifest.filter(entries => !keys.has(precacheController.getCacheKeyForURL(entries.url)))
  totalSize = total.length;
  notifyClients({
    type: 'INSTALLING',
    cached: cached,
    total: totalSize
  })
})
self.addEventListener('activate', async (event) => {
  await event.waitUntil(precacheController.activate(event));
  
  notifyClients({
    type: 'DONE',
    cached: cached,
    total: totalSize
  })
})
self.addEventListener('fetch', async (event) => {
  const cacheKey = precacheController.getCacheKeyForURL(event.request.url);
  event.respondWith(caches.match(cacheKey))
  notifyClients({
    type: 'FETCH',
    cached: cached,
    total: totalSize
  })
})
let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-bde3ff419e0d504c2c77.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(getCacheKeyForURL(resource)))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)