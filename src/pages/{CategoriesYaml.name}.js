import * as styles from "../components/index.module.css"
import React from "react";
import CardComponent from "../components/CardComponent/CardComponent.js"
import { graphql } from "gatsby";
import icon from '../images/icon.png';
import Header from "../components/Header/Header";

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
              childrenImageSharp {
                gatsbyImageData
              }
            }
            title
          }
        }
    }
  }
`

let CategoryPage = ({ data }) => {
  const category = data.categoriesYaml;
  // let grid = false;
  return (
    <div className={styles.addMargins}>
      <Header name={category.title} />
      <img src={icon} alt="" className={styles.logo} />
    </div>

    // <>
    //   <div className={styles.header}>
    //     <div className={styles.head}>
    //       <img src={icon} alt="" className={styles.logo} />
    //       <h1>{category.title}</h1>
    //     </div>
    //   </div>
    /* <div className={grid ? 'grid':'list'}>
            {
                data.allMarkdownRemark.nodes.map(element =>
                    <CardComponent
                        key={element.name}
                        name={element.name}
                        // image={grid ? element.image.childImageSharp : element.image.childImageSharp}
                        title={element.title}
                    />)
            }
      </div> */
    // </>
  )
}

export default CategoryPage