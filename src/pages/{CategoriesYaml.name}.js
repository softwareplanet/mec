import * as styles from "../components/index.module.css";
import React, { useState } from "react";
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import RenderList from "../components/RenderList/RenderList";

export const query = graphql`
  query ($name: String) {
    categoriesYaml(name: { eq: $name }) {
      title
      equipment {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(width: 160, height: 160)
            }
          }
          title
        }
        slug
      }
    }
  }
`;

let CategoryPage = ({ data }) => {
  const category = data.categoriesYaml;
  return (
    <div className={styles.addMargins}>
      <Header name={category.title} backPath="/" />
      <RenderList data={category.equipment} />
    </div>
  );
};

export default CategoryPage;
