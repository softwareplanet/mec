import "../components/reset.css"
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
            gatsbyImageData (width: 160)
          }
        }
        list_img {
          childImageSharp {
            gatsbyImageData (height: 50)
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