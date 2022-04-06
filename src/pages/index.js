import "../components/reset.css";
import React, { useContext, useEffect } from "react";
import RenderList from "../components/RenderList/RenderList";
import { graphql } from "gatsby";
import context from '../components/Layout/layoutContext';

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
  const {setName, setBackPath} = useContext(context.HeaderContext)
  useEffect(() => { 
    setName('Військова техніка');
    setBackPath(null);
  });

  return (    
      <RenderList
        data={data.allCategoriesYaml.nodes.map((n) => ({
          path: n.name,
          image: n.image.childImageSharp,
          title: n.title,
        }))}
      />  
  );
};

export default FirstPage;
