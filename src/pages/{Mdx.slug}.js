import React from "react";
import * as styles from "../components/InfoPage.module.css";
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
            <div className={styles.header}>
                <h1>❮ Taнки</h1>
                <img src={tank} /> {/* Slider component */}
            </div>
            <div className={styles.infoPage}
            >
                <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </div >
        </>
    );
}

export default InfoPage;
