import * as styles from "../components/index.module.css"
import React, {useState} from "react";
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import CategoryList from "../components/RenderList/CategoryList";

export const query = graphql`
  query ($name: String){
    categoriesYaml (name: {eq: $name}) {
      title
    }
    allMdx(filter: {frontmatter: {category: {eq: $name}}}) {
        nodes {
          frontmatter {
            category
            image {
              childImageSharp {
                gatsbyImageData (width: 160, height: 160)
              }
            }
            title
          }
          slug
        }
    }
  }
`

let CategoryPage = ({ data }) => {
  const category = data.categoriesYaml;
  let [view, setView] = useState('grid')
  return (
    <div className={styles.addMargins}>
      <Header name={category.title} backPath="/"/>
      <CategoryList data={data.allMdx.nodes}/>
    </div>
  )
}

export default CategoryPage