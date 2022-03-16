import React from "react";
import * as styles from "../components/InfoPage.module.css";
import * as header from "../components/index.module.css"
import { graphql, Link } from "gatsby";
import Header from "../components/Header/Header";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Slider from "../components/Slider/ImageSlider/Slider";

export const query = graphql`
        query ($slug: String) {
            mdx(slug:{eq:$slug}) {
                frontmatter{
                    title
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

const InfoPage = (props) => {
    console.log(props.data);

    const { category } = props.data.mdx.frontmatter;

    return (
        <>
            <div className={header.addMargins}>
                <Header name={category.title} backPath={`/${category.name}`} />
            </div>
            <div className={styles.header}>
                <Slider />                
            </div>
            <div className={styles.infoPage} >
                <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
                <div className={styles.links}>
                    <a target="_blank" href="https://uk.wikipedia.org/">Детальніше</a>
                </div>
            </div >
        </>
    );
}

export default InfoPage;
