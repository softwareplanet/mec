import "../components/index.css"
import React from "react";
import CardComponent from "../components/CardComponent/CardComponent.js"
import { graphql } from "gatsby";
import icon from '../images/icon.png';
// import "./Header.css"

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
  let grid = false;
  return (
    <>
      <div className="header">
        <div className="head">
          <img src={icon} alt="" className="logo" />
          <h1>{category.title}</h1>
        </div>
      </div>
      {/* <div className={grid ? 'grid':'list'}>
            {
                data.allMarkdownRemark.nodes.map(element =>
                    <CardComponent
                        key={element.name}
                        name={element.name}
                        // image={grid ? element.image.childImageSharp : element.image.childImageSharp}
                        title={element.title}
                    />)
            }
      </div> */}
      
    </>
  )
}

export default CategoryPage