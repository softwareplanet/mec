import React from "react";
import styles from "../templates/InfoPage.css";
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
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </div >
    );
}

export default InfoPage;
