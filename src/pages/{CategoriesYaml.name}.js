import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";
import RenderList from "../components/RenderList/RenderList";
import ViewContext from "../context/context";

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
  const {setName, setBackPath} = useContext(ViewContext)
  useEffect(() => { 
      setName(category.title);
      setBackPath("/");
    }
  );

  return (    
      <RenderList
        data={category.equipment.map((n) => ({
          path: n.slug,
          image: n.frontmatter.image.childImageSharp,
          title: n.frontmatter.title,
        }))}
      />    
  );
};

export default CategoryPage;
