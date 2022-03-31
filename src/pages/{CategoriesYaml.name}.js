import * as styles from "../components/index.module.css";
import React, { useState } from "react";
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import RenderList from "../components/RenderList/RenderList";

export const query = graphql`
  query($name: String) {
    categoriesYaml(name: { eq: $name }) {
      title
      equipment {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(width: 240, height: 240)
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
      <div style={{ maxWidth: 900, width: "100%" }}>
        <Header name={category.title} backPath="/" />
      </div>
      <RenderList
        data={category.equipment.map((n) => ({
          path: n.slug,
          image: n.frontmatter.image.childImageSharp,
          title: n.frontmatter.title,
        }))}
      />
    </div>
  );
};

export default CategoryPage;
