import React, { useState, useEffect } from 'react';
import * as styles from '../components/InfoPage.module.css';
import { graphql } from 'gatsby';
import Dropdown from '../components/ToolBar/Dropdown/Dropdown.js';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Slider from '../components/Slider/SliderComponent/SliderComponent';
import tg_icon from '../equipment/images/telegram-icon.png';
import { Network } from '@capacitor/network';
import Layout from '../components/Layout/Layout';
import clsx from 'clsx';

export const query = graphql`
    query($slug: String, $imageDir: String, $category: String) {
        mdx(slug: { eq: $slug }) {
            frontmatter {
                title
                source
                category {
                    name
                    title
                }
            }
            slug
            body
        }
        allFile(filter: { relativeDirectory: { eq: $imageDir } }) {
            nodes {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, breakpoints: [420])
                }
            }
        }
        allMdx(
            filter: { frontmatter: { category: { name: { eq: $category } } } }
            sort: { fields: frontmatter___title }
        ) {
            nodes {
                slug
                frontmatter {
                    title
                }
            }
        }
    }
`;

const InfoPage = ({ data }) => {
    const notSsr = typeof window !== 'undefined';
    let [online, setOnline] = useState(notSsr ? navigator.onLine : true);

    useEffect(() => {
        if (notSsr) {
            const handle = Network.addListener('networkStatusChange', status =>
                setOnline(status.connected)
            );
            return () => handle.then(h => h.remove());
        }
    }, [notSsr]);

    const { category } = data.mdx.frontmatter;
    const images = data.allFile.nodes.map(n => n.childImageSharp);
    let decodedURI = decodeURI(data.mdx.frontmatter.source);

    return (
        <Layout name={category.title} backPath={`/${category.name}`}>
            <Dropdown
                data={data.allMdx.nodes}
                currEquip={data.mdx.frontmatter}
            />
            <div className={styles.fullWidthItem}>
                <Slider images={images} />
            </div>
            <div
                className={`${styles.infoPage} ${clsx({
                    [styles.offline]: !online,
                })}`}
            >
                <div className={styles.title}>
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <a
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer"
                        href="https://t.me/evorog_bot"
                    >
                        <img
                            style={{ marginRight: '5px' }}
                            height="17px"
                            src={tg_icon}
                        />{' '}
                        єВорог
                    </a>
                </div>
                <MDXRenderer>{data.mdx.body + online}</MDXRenderer>
                <div className={styles.source}>
                    <h3>Джерело:</h3>
                    <a
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer"
                        href={data.mdx.frontmatter.source}
                    >
                        {decodedURI}
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default InfoPage;
