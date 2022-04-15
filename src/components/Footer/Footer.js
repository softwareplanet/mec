import React, { useEffect, useState } from 'react';
import * as styles from './Footer.module.css';
import clsx from 'clsx';
import { useStaticQuery, graphql } from 'gatsby';

export default function Footer({ isIphone, isBrowser }) {
    const data = useStaticQuery(graphql`
        query {
            gitCommit(latest: { eq: true }) {
                hash
                date(formatString: "YYYYMMDDHHmmss")
            }
            versionInfo {
                version
            }
        }
    `);

    const hashCommit = data.gitCommit.hash.substring(0, 7);
    const version = data.versionInfo.version;
    const dateCommit = data.gitCommit.date;
    const tagLink = `https://github.com/softwareplanet/mec/releases/tag/v${version}`;
    const repository = `https://github.com/softwareplanet/mec`;

    return (
        <div
            className={clsx(styles.footerContainer, { [styles.ios]: isIphone })}
        >
            <div className={styles.versionInfo}>
                Version&nbsp;
                <a href={tagLink} target="_blank" rel="noreferrer">
                    {version}
                </a>
                +
                <a href={repository} target="_blank" rel="noreferrer">
                    sha.{hashCommit}
                </a>
                -{dateCommit}
            </div>
        </div>
    );
}
