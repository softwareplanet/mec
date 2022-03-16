import * as styles from "../components/index.module.css"
import React, {useState} from "react";
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import CategoryList from "../components/RenderList/CategoryList";

export const query = graphql`
  query ($name: String) {
    categoriesYaml (name: {eq: $name}) {
      title
      equipment {
        frontmatter {
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
  return (
    <div className={styles.addMargins}>
      <Header name={category.title} backPath="/"/>
      <CategoryList data={category.equipment}/>
    </div>
  )
}

export default CategoryPage