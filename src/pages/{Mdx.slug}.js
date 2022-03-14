import React from "react";
//import styles from "./InfoPage.css";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
        query ($slug: String) {
            mdx(slug:{eq:$slug}) {
                frontmatter{
                    title
                }
                body
            }
        }
    `;

const InfoPage = (props) => {
    
    return (
        <div className="infoPage">
            <h1>{props.data.mdx.frontmatter.title}</h1>            
            <MDXRenderer title="My Stuff!">{props.data.mdx.body}</MDXRenderer>
        </div >
    );
}

export default InfoPage;
