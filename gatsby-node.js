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

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type Mdx implements Node {
        frontmatter: Frontmatter
      }
      type Frontmatter {
        category: CategoriesYaml @link(by: "name")
      }
      type CategoriesYaml implements Node {
        equipment: [Mdx] @link(by: "frontmatter.category.name", from: "name")
      }
    `
    createTypes(typeDefs)
}