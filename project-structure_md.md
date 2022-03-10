---
type: document
author: Alexander Kotov
date: 2022-03-10
---
# Project structure
```
.git/
gatsby-config.js
gatsby-node.js <- createPage
src/
    components <- reusable Layout, Nav, ViewSwitcher, Header
    pages/
        index.js <- categories
        // {equipment} ?
        {category.name}.js 
        //{mdx.frontmeter___category}
          // {mdx.frontmeter___name}.js
        {mdx.slug}.js <- e.g.: tanks/t-90
    categories.json / ?.yml
    equipment/
        tanks/
            t-90/
                index.mdx
                images/
                    front.jpg
                    side.jpg
            t-80/
                index.mdx
                images/
                    front.jpg
                    side.jpg
        radio/
            rgt/
                index.mdx
                images/
                    front.jpg
                    side.jpg
```

## Categories

```json
[
    {
        "name": "tanks",
        "title": "Танки"
    },
    {
        "name": "jets",
        "title": "Літаки"
    },
]
```

```yml
-   name: tanks
    title: Танки
    image: tanks.jpg
-   name: jets
    title: Літаки
    image: jets.jpg
```

## Config

```
plugins: [
    {
        resolve: "gatsby-plugin-mdx",
        options: {
            path: `${__dirname}/src/equipment`,
            name: equipment
        }
    }
    {
        resolve: "gatsby-yml",
        options: {
            path: `${__dirname}/src/categories.yml`,
            name: categories
        }
    }
]
```

## {category.name}.js 
```jsx
export const query = graphql`
    query ($name: string) {
        allMdx {
            frontmeter {
                title         
                category                
            }
			slug
        }
		category(name: {eq: $name}) {
			name
			title
		}
    }
`

export default CategoryPage({ data }) {
    const equipmentInCategory = data.allMdx.filter(e => e.frontmeter.category == data.category.name)
    return (
        <Layout pageTitle={data.category.title}>
            {equipmentInCategory.map(e => 
			  <EquipmentCard 
			    link={e.slug}
				image={e.image}
				text={e.title}
			  />)
			}
        </Layout>
    )
}
```

## {mdx.slug}.js 
```jsx
export const query = graphql`
    query ($slug: string) {
        mdx(slug: {eq: $slug}) {
            frontmeter {
                title
                category                
            }
            data
        }
        allMdx {
            frontmeter {
                title
                name
                category                
            }
        } 
    }
`

export default EquipmentPage({ data }) {
    const equipmentInCategory = data.allMdx.filter(e => e.frontmeter.category == data.mxd.frontmeter.category)
    return (
        <Layout pageTitle={data.mdx.frontmater.title}>
            <EquipmentSwitcher options={equipmentInCategory}/>
            <MDXRenderer>
                {data.mdx.data}
            </MDXRenderer>
        </Layout>
    )
}
```