import "../components/reset.css";
import * as styles from "../components/index.module.css";
import React from "react";
import Header from "../components/Header/Header";
import RenderList from "../components/RenderList/RenderList";
import { graphql } from "gatsby";

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
    <div className={styles.addMargins}>
      <div style={{  maxWidth: 900, width: "100%", }}>
        <Header name="Військова техніка" />
      </div>
      <RenderList
        data={data.allCategoriesYaml.nodes.map((n) => ({
          path: n.name,
          image: n.image.childImageSharp,
          title: n.title,
        }))}
      />
    </div>
  );
};

export default FirstPage;
