import "../components/index.css"
import React from "react";
import Header from "../components/Header/Header"
import RenderList from "../components/RenderList/RenderList";
import { graphql } from "gatsby"

export const query = graphql`
  query ($name: String){
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
  return (
    <>
      <Header />
      <RenderList data={data.markdownRemark.nodes} />
    </>
  )
}

export default CategoryPage