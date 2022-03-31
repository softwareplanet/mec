import React from 'react';
import * as styles from './Footer.module.css';

export default function Footer({ commit, tag }) {
  const hashCommit = commit.hash.substring(0, 7);
  const tagName = tag.name.substring(1);
  const dateCommit = commit.date;
  const linkCommit = `https://github.com/softwareplanet/mec/commit/${hashCommit}`

  return (
    <div className={styles.versionInfo}>
      <span>Version {tagName}+sha.</span>
      <a href={linkCommit} target='_blank' rel="noreferrer">{hashCommit}</a>
      <span>-{dateCommit}</span>
    </div>
  )
}
