import React from "react";
import RenderList from "../components/RenderList/RenderList";
import Layout from '../components/Layout/Layout';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
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
    },
    gitCommit(latest: {eq: true}) {
      hash
      date(formatString: "YYYYMMDDHHmmss")
    },
    gitTag(latest: {eq: true}) {
      name
    }
   }
`;

let FirstPage = ({ data }) => {
  return (
    <Layout>
      <Header name="Військова техніка" />
      <RenderList
        data={data.allCategoriesYaml.nodes.map((n) => ({
          path: n.name,
          image: n.image.childImageSharp,
          title: n.title,
        }))}
      />
      <Footer
        commitInfo={data.gitCommit}
        tagInfo={data.gitTag}
      />
    </Layout>
  );
};

export default FirstPage;
