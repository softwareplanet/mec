const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')
exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions;
  const data = await graphql(
    `
      {
        allMdx {
          nodes {
            slug
          }
        }
      }
    `
  )

  if (data.errors) {
    console.log(errors);
    return
  }

  for (let item of data.data.allMdx.nodes) {
    createPage({
      path: item.slug,
      component: path.resolve(`./src/templates/equipment-page.js`),
      context: {slug: item.slug, imageDir: item.slug + 'images'}
    });
  }
}

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