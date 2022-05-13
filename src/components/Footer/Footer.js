import React from 'react';
import * as styles from './Footer.module.css';
import clsx from 'clsx';
import { useStaticQuery, graphql } from 'gatsby';

export default function Footer({ isIphone, isBrowser, isProgressbarActive }) {
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
    const commitLink = `https://github.com/softwareplanet/mec/tree/${data.gitCommit.hash}`;

    return (
        <div
            className={clsx(
                styles.footerContainer,
                { [styles.ios]: isIphone },
                { [styles.browser]: isBrowser },
                { [styles.progressbar]: isProgressbarActive }
            )}
        >
            <div className={styles.versionInfo}>
                Version&nbsp;
                <a href={tagLink} target="_blank" rel="noreferrer">
                    {version}
                </a>
                +
                <a href={commitLink} target="_blank" rel="noreferrer">
                    sha.{hashCommit}
                </a>
                -{dateCommit}
            </div>
        </div>
    );
}
