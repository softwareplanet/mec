const _ = require('lodash')
const fs = require('fs')
// set flexsearch object as a global variable to make it available to language files
let FlexSearch = require('flexsearch')

exports.onPostBootstrap = function (_ref, options) {
  const { getNodes } = _ref

  const { type } = options

  const _options$langua = options.languages
  const languages = _options$langua === undefined ? ['en'] : _options$langua

  const _options$fields = options.fields
  const fields = _options$fields === undefined ? [] : _options$fields

  const store = []
  const indexStore = []
  const fullIndex = {}

  
  languages.forEach(lng => {

    // collect fields to store
    const fieldsToStore = fields
      .filter(field => (field.store ? field.resolver : null))
      .map(({name, resolver}) => ({ 
        name, 
        resolver: (typeof resolver === 'function') ? resolver : (n) => _.get(n, resolver)
      }))
    const nid = []

    // add each field to index
    fields.forEach(index_ => {
      const index = {}
      index.name = index_.name

      if (index_.indexed) {
        const attrs = index_.attributes
        index.attrs = attrs
        // load language files if needed by stemmer or filter
        if (
          index.attrs.stemmer !== undefined ||
          index.attrs.filter !== undefined
        ) {
          try {
            if (lng === 'en') {
              require('./lang/en')
            } else if (lng === 'de') {
              require('./lang/en')
            } else if (lng === 'uk') {
              require('./lang/uk')
            }
            else {
              console.error(
                'Language not supported by pre-defined stemmer or filter'
              )
            }
          } catch (e) {
            console.error(e)
          }
        }

        index.values = FlexSearch.create({...attrs, tokenize: require('./uk-tokenize')})
      }

      getNodes()
        .filter(node => {
          if (node.internal.type === type) {
            return node
          }
        })
        .forEach((n, i) => {
          const id = i
          if (index_.indexed) {
            const content = _.get(n, index_.resolver).toLowerCase()
            index.values.add(id, content);
          }
          const nodeContent = {}
          fieldsToStore.forEach(field => {
            nodeContent[field.name] = field.resolver(n)
          })
          if (!nid.includes(id)) {
            store.push({ id, node: nodeContent })
            nid.push(id)
          }
        })

      if (index_.indexed) {
        index.values = index.values.export()
        indexStore.push(index)
      }
    })

    fullIndex[lng] = {
      index: indexStore,
      store,
    }
  })

  fs.writeFileSync('public/flexsearch_index.json', JSON.stringify(fullIndex))
}
