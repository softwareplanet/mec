import React from 'react';
import * as styles from './Footer.module.css';
import { useStaticQuery, graphql } from "gatsby";


export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      gitCommit(latest: {eq: true}) {
        hash
        date(formatString: "YYYYMMDDHHmmss")
      },
      gitTag(latest: {eq: true}) {
        name
      }
    }
`)

  const hashCommit = data.gitCommit.hash.substring(0, 7);
  const tagName = data.gitTag.name.substring(1);
  const dateCommit = data.gitCommit.date;
  const tagLink = `https://github.com/softwareplanet/mec/releases/tag/${data.gitTag.name}`
  const repository = `https://github.com/softwareplanet/mec`;

  return (
    <div className={styles.versionInfo}>
      Version&nbsp;
      <a href={tagLink} target='_blank' rel="noreferrer">{tagName}</a>
      +
      <a href={repository} target='_blank' rel="noreferrer">sha.{hashCommit}</a>
      -{dateCommit}
    </div>
  )
}
