import React from "react";
import { graphql } from "gatsby";
import RenderList from "../../components/RenderList/RenderList";
import Layout from "../../components/Layout/Layout";

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
    <Layout name={category.title} backPath="/dir" >
      <RenderList
        data={category.equipment.map((n) => ({
          path: n.slug,
          image: n.frontmatter.image.childImageSharp,
          title: n.frontmatter.title,
        }))}
      />
    </Layout>
  );
};

export default CategoryPage;
