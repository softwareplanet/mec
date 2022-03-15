import * as styles from "../components/index.module.css"
import React, {useState} from "react";
import CardComponent from "../components/CardComponent/CardComponent.js"
import { graphql } from "gatsby";
import icon from '../images/icon.png';
import Header from "../components/Header/Header";
import CategoryList from "../components/RenderList/CategoryList";

export const query = graphql`
  query ($name: String){
    categoriesYaml (name: {eq: $name}) {
      title
    }
    allMarkdownRemark(filter: {frontmatter: {category: {eq: $name}}}) {
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
          fields {
            slug
          }
        }
    }
  }
`

let CategoryPage = ({ data }) => {
  const category = data.categoriesYaml;
  let [view, setView] = useState('grid')
  // let grid = false;
  return (
    <div className={styles.addMargins}>
      <Header name={category.title} />
      <CategoryList data={data.allMarkdownRemark.nodes}/>
    </div>

    // <>
    //   <div className={styles.header}>
    //     <div className={styles.head}>
    //       <img src={icon} alt="" className={styles.logo} />
    //       <h1>{category.title}</h1>
    //     </div>
    //   </div>
    
    // </>
  )
}

export default CategoryPage