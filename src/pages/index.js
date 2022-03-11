import "../components/index.css"
import React from "react";
import Header from "../components/Header/Header"
import RenderList from "../components/RenderList/RenderList";
import { graphql } from "gatsby"

export const query = graphql`
  query {
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
`

let FirstPage = ({ data }) => {
  return (
    <>
      <Header />
      <RenderList data={data.allCategoriesYaml.nodes} />
    </>
  )
}

export default FirstPage