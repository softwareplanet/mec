import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "../components/InfoPage.module.css";
import * as header from "../components/index.module.css"
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import Dropdown from "../components/ToolBar/Dropdown/Dropdown.js"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Slider from "../components/Slider/SliderComponent/SliderComponent";
import tg_icon from "../equipment/images/telegram-icon.png";
import { Network } from "@capacitor/network"

export const query = graphql`
    query ($slug: String, $imageDir: String, $category: String) {
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
                        breakpoints: [420]
                    )                    
                }
            }
        }
        allMdx(filter: {frontmatter: {category: {name: {eq: $category}}}}) {
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
    let status = typeof window !== `undefined` ? status = navigator.onLine : true

    let [md, setMd] = useState(<MDXRenderer>{data.mdx.body}</MDXRenderer>)
    let state = true;
    const rerender = () => state = !state;

    if (typeof window !== `undefined`) {
        Network.addListener("networkStatusChange", () => {
            setMd(<MDXRenderer>{data.mdx.body + rerender()}</MDXRenderer>)
        })
    }

    const { category } = data.mdx.frontmatter;
    const images = data.allFile.nodes.map(n => n.childImageSharp)
    let decodedURI = decodeURI(data.mdx.frontmatter.source)

    return (
        <>
            <div className={header.addMargins}>
                <Header name={category.title} backPath={`/${category.name}`} />
            </div>
            <Dropdown data={data.allMdx.nodes} currEquip={data.mdx.frontmatter.title}/>
            <div className={styles.header}>
                <Slider images={images} />
            </div>
            <div className={styles.infoPage} >
                <div className={styles.title}>
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <a className={styles.link} target="_blank" rel="noreferrer" href="https://t.me/evorog_bot">
                        <img style={{marginRight: 5}} height="17px" src={tg_icon} /> єВорог
                    </a>
                </div>
                <div className={status ? "" : styles.hide}>
                    {md}
                </div>
                <div>
                    <h3>Джерело:</h3>
                    <a className={styles.link} target="_blank" rel="noreferrer" href={data.mdx.frontmatter.source}>{decodedURI}</a>
                </div>
            </div>
        </>
    );
}

export default InfoPage;
