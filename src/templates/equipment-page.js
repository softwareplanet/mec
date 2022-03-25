import React from "react";
import * as styles from "../components/InfoPage.module.css";
import * as header from "../components/index.module.css"
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import { MDXRenderer } from "gatsby-plugin-mdx"
import Slider from "../components/Slider/SliderComponent/SliderComponent";
import tg_icon from "../equipment/images/telegram-icon.png";

export const query = graphql`
    query ($slug: String, $imageDir: String) {
        mdx(slug:{eq:$slug}) {
            frontmatter {
                title
                source
                category {
                    name
                    title
                }                
            }
            body
        }
        allFile(filter: {relativeDirectory: {eq: $imageDir }}) {
            nodes {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        breakpoints: [750]
                    )
                }
            }
        }
    }
`;

const InfoPage = ({ data }) => {

    const { category } = data.mdx.frontmatter;
    const images = data.allFile.nodes.map(n => n.childImageSharp)
    let decodedURI = decodeURI(data.mdx.frontmatter.source)

    return (
        <>
            <div className={header.addMargins}>
                <Header name={category.title} backPath={`/${category.name}`} />
            </div>
            <div className={styles.header}>
                <Slider images={images} />
            </div>
            <div className={styles.infoPage} >
                <div className={styles.title}>
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <a className={styles.link} target="_blank" rel="noreferrer" href="https://t.me/evorog_bot"><img height="17px" src={tg_icon} /> єВорог</a>
                </div>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
                <div>
                    <h3>Джерело:</h3>
                    <a className={styles.link} target="_blank" rel="noreferrer" href={data.mdx.frontmatter.source}>{decodedURI}</a>
                </div>
            </div >
        </>
    );
}

export default InfoPage;
