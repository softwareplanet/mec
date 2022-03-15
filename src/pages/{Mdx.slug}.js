import React from "react";
import * as styles from "../components/InfoPage.module.css";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import tank from "../equipment/tanks/t-90/images/t-90.png"

export const query = graphql`
        query ($slug: String) {
            mdx(slug:{eq:$slug}) {
                frontmatter{
                    title
                    category
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

    return (
        <>
            <div className={styles.header}>
                <Link to={`/${props.data.mdx.frontmatter.category}`}><h1>❮ titleOfCategory</h1></Link>                
                <GatsbyImage layout="fullWidth" image={getImage(props.data.mdx.frontmatter.image.childImageSharp)} alt="" /> {/* Slider component */}
            </div>
            <div className={styles.infoPage}
            >
                <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </div >
        </>
    );
}

export default InfoPage;
