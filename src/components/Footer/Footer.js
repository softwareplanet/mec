import React from 'react';
import * as styles from './Footer.module.css';

export default function Footer({ commitInfo, tagInfo }) {
  const hashCommit = commitInfo.hash.substring(0, 7);
  const tagName = tagInfo.name.substring(1);
  const dateCommit = commitInfo.date;
  const linkCommit = `https://github.com/softwareplanet/mec/commit/${hashCommit}`;
  const tagLink = `https://github.com/softwareplanet/mec/releases/tag/${tagInfo.name}`

  return (
    <div className={styles.versionInfo}>
      Version&nbsp;
      <a href={tagLink} target='_blank' rel="noreferrer">{tagName}</a>
      +
      <a href={linkCommit} target='_blank' rel="noreferrer">sha.{hashCommit}</a>
      -{dateCommit}
    </div>
  )
}
