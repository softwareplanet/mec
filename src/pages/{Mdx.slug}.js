import React from "react";
//import styles from "./InfoPage.css";
import { graphql } from "gatsby";

export const query = graphql`
        query ($slug: String) {
            mdx(slug:{eq:$slug}) {
                frontmatter{
                    title
                }
            }
        }
    `;

const InfoPage = (props) => {
    
    return (
        <div className="infoPage">
            {JSON.stringify(props)}
            <h1>{props.data.mdx.frontmatter.title}</h1>
            {/* <MDXRenderer title="My Stuff!">{}</MDXRenderer> */}
        </div >
    );
}

export default InfoPage;
