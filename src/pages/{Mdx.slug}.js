import React from "react";
import * as styles from "../components/InfoPage.module.css";
import * as header from "../components/index.module.css"
import { graphql, Link } from "gatsby";
import Header from "../components/Header/Header";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SliderComponent from "../components/Slider/SliderComponent/SliderComponent";

export const query = graphql`
        query ($slug: String) {
            mdx(slug:{eq:$slug}) {
                frontmatter{
                    title
                    source
                    category {
                        name
                        title
                    }
                    image {                        
                        childImageSharp {
                          gatsbyImageData 
                        }
                      }
                }
                body
            }
        }
    `;

const InfoPage = ({ data }) => {

    const { category } = data.mdx.frontmatter;

    return (
        <>
            <div className={header.addMargins}>
                <Header name={category.title} backPath={`/${category.name}`} />
            </div>
            <div className={styles.header}>
                <GatsbyImage layout="fullWidth" image={getImage(data.mdx.frontmatter.image.childImageSharp)} alt="" /> {/* Slider component */}
            </div>
            <div className={styles.infoPage} >
                <h1>{data.mdx.frontmatter.title}</h1>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
                <div className={styles.links}>
                    <a target="_blank" href={data.mdx.frontmatter.source}>Детальніше</a>
                </div>
            </div >
        </>
    );
}

export default InfoPage;
