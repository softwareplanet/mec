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
    },
    gitCommit(latest: {eq: true}) {
      hash
      date(formatString: "DD.MM.YYYY")
    },
    gitTag(latest: {eq: true}) {
      name
    }
   }
`;

let FirstPage = ({ data }) => {
  return (
    <div className={styles.addMargins}>
      <Header name="Військова техніка" />
      <RenderList
        data={data.allCategoriesYaml.nodes.map((n) => ({
          path: n.name,
          image: n.image.childImageSharp,
          title: n.title,
        }))}
      />
      <div className={styles.versionInfo}>
        <p>{data.gitTag.name} - beta1 - </p>
        <a href={`https://github.com/softwareplanet/mec/commit/${data.gitCommit.hash}`}>{data.gitCommit.hash} - {data.gitCommit.date}</a>
      </div>
    </div>
  );
};

export default FirstPage;
