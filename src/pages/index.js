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
        grid_img {
          childImageSharp {
            gatsbyImageData(width: 160, height: 160)
          }
        }
        list_img {
          childImageSharp {
            gatsbyImageData(height: 160)
          }
        }
      }
    }
    allMdx {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
`;

let FirstPage = ({ data }) => {
  return (
    <div className={styles.addMargins}>
      <Header name="Військова техніка" />
      <RenderList data={data.allCategoriesYaml.nodes} />
    </div>
  );
};

export default FirstPage;
