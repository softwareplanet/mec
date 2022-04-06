const { createFilePath } = require(`gatsby-source-filesystem`);
const version = require('./version');

const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const data = await graphql(
        `
            {
                allMdx {
                    nodes {
                        frontmatter {
                            category {
                                name
                            }
                        }
                        slug
                    }
                }
            }
        `
    );

    if (data.errors) {
        console.log(errors);
        return;
    }

    const equipmentPageTemplate = path.resolve(
        `src/templates/equipment-page.js`
    );
    for (let item of data.data.allMdx.nodes) {
        createPage({
            path: item.slug,
            component: equipmentPageTemplate,
            context: {
                slug: item.slug,
                imageDir: item.slug + 'images',
                category: item.frontmatter.category.name,
            },
        });
    }
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
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
      type VersionInfo implements Node @infer {
        version: String!
      }
    `;
    createTypes(typeDefs);
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    const versionInfo = { version };

    const nodeContent = JSON.stringify(versionInfo);

    const nodeMeta = {
        id: createNodeId('versionInfo'),
        parent: null,
        children: [],
        internal: {
            type: 'VersionInfo',
            mediaType: 'text/plain',
            content: nodeContent,
            contentDigest: createContentDigest(versionInfo),
        },
    };

    const node = Object.assign({}, versionInfo, nodeMeta);
    createNode(node);
};
