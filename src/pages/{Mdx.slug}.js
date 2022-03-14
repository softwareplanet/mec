import React from "react";
import styles from "../templates/InfoPage.css";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"
import tank from "../equipment/tanks/T-90/images/t-90.png"

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
        <>
            <div className="header">
                <h1>❮ Taнки</h1>
                <img src={tank} /> {/* Slider component */}
            </div>
            <div className="infoPage">
                <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </div >
        </>
    );
}

export default InfoPage;
