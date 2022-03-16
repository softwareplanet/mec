exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const {data} = await graphql(`
        {
            allCategoriesYaml {
                nodes {
                    name
                    title
                    grid_img {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    list_img {
                        childImageSharp {
                            gatsbyImageData (sizes: "(min-width: none)")
                        }
                    }
                }
            }
        }
    `)
    
    
    if (data.errors) {
        console.log("Errors", data.errors)
        return
    }

    const HomePage = require.resolve("./src/pages/index.js")

    data.allCategoriesYaml.nodes.forEach(node => {
        createPage({
            path: "/",
            component: HomePage,
            context: { name: node.name }
        })
    })
}
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}