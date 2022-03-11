exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const data = await graphql(`
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
                            gatsbyImageData 
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

    data.data.allCategoriesYaml.nodes.forEach(node => {
        createPage({
            path: "/",
            component: HomePage,
            context: { name: node.name }
        })
    })

}