module.exports = {
  siteMetadata: {
    title: `Stop orda`,
    siteUrl: `https://stop-orda.netlify.app`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [
          [require('remark-oembed'), { syncWidget: true }]
        ]
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/equipment/`,
        name: 'equipments'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stop-orda`,
        short_name: `stop-orda`,
        start_url: `/`,
        background_color: `#F5F5F5`,
        theme_color: `#F5F5F5`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: 'none',
        crossOrigin: `use-credentials`,
        icons: [
          {
            src: "public/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "public/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "public/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
    },
    {
      resolve: `local-offline-plugin`,
      options: {
        precachePages: ["/*", "/**/**/index.html"],
        workboxConfig: {
          dontCacheBustURLsMatching: /(\.js$|\.css$|static\/|.*page-data\.json$)/,
          globPatterns: [
            'offline-plugin-app-shell-fallback/index.html',
            'public/icons/*', '**/*.png', '**/*.jpg', "**/*.webp"
          ]
        }
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          Mdx: {
            title: node => node.frontmatter.title
          },
        },
      },
    },
  ]
}
