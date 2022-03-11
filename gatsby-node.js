const path = require("path")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const data = await graphql(`
        {
            allCategoriesYaml {
                edges {
                    node {
                        name
                        title
                        grid_img
                        list_img
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

    data.data.allCategoriesYaml.edges.forEach(edge => {
        createPage({
            path: "/",
            component: HomePage,
            context: {name: edge.node.name}
        })
    })

}