import "../components/reset.css";
import React from "react";
import RenderList from "../components/RenderList/RenderList";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";

export const query = graphql`
  query {
    allCategoriesYaml {
      nodes {
        name
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 240, height: 240)
          }
        }
      }
    }
   }
`;

let FirstPage = ({ data }) => {
  return (
    <Layout name="Військова техніка">
      <RenderList
        data={data.allCategoriesYaml.nodes.map((n) => ({
          path: n.name,
          image: n.image.childImageSharp,
          title: n.title,
        }))}
      />
    </Layout>
  );
};

export default FirstPage;
