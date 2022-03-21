import "../components/reset.css";
import * as styles from "../components/index.module.css";
import React from "react";
import Header from "../components/Header/Header";
import RenderList from "../components/RenderList/RenderList";
import { graphql } from "gatsby";
import { Progressbar } from "../components/Progressbar/Progressbar";

export const query = graphql`
  query {
    allCategoriesYaml {
      nodes {
        name
        title
        grid_img {
          childImageSharp {
            gatsbyImageData(width: 160)
          }
        }
        list_img {
          childImageSharp {
            gatsbyImageData(height: 160)
          }
        }
      }
    }
  }
`;

let FirstPage = ({ data }) => {
  return (
    <layout>
      <div className={styles.addMargins}>
        <Progressbar />
        <Header name="Військова техніка" />
        <RenderList data={data.allCategoriesYaml.nodes} />
      </div>
    </layout>
  );
};

export default FirstPage;
