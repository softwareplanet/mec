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
                    wikipedia
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
                <SliderComponent />
            </div>
            <div className={styles.infoPage} >
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
                <div className={styles.links}>
                    <a target="_blank" href={data.mdx.frontmatter.wikipedia}>Детальніше</a>
                </div>
            </div >
        </>
    );
}

export default InfoPage;
