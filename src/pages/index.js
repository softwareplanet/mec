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
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        list_img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
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