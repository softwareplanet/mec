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
      date(formatString: "YYYYMMDDHHmmss")
    },
    gitTag(latest: {eq: true}) {
      name
    }
   }
`;

let FirstPage = ({ data }) => {
  const hashCommit = data.gitCommit.hash.substring(0, 7);
  const tagName = data.gitTag.name.substring(1);
  const dateCommit = data.gitCommit.date;

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
        <span>Version {tagName}</span>
        <a href={`https://github.com/softwareplanet/mec/commit/${hashCommit}`} target='_blank' rel="noreferrer">+sha.{hashCommit}</a>
        <span>-{dateCommit}</span>
      </div>
    </div>
  );
};

export default FirstPage;
