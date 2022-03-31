import React from 'react';
import * as styles from './Footer.module.css';

export default function Footer({ commitInfo, tagInfo }) {
  const hashCommit = commitInfo.hash.substring(0, 7);
  const tagName = tagInfo.name.substring(1);
  const dateCommit = commitInfo.date;
  const linkCommit = `https://github.com/softwareplanet/mec/commit/${hashCommit}`

  return (
    <div className={styles.versionInfo}>
      <span>Version&nbsp;</span>
      <a href={linkCommit} target='_blank' rel="noreferrer">{tagName}+</a>
      <span>sha.{hashCommit}</span>
      <span>-{dateCommit}</span>
    </div>
  )
}
