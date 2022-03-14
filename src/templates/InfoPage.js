import React from "react";
import styles from "./InfoPage.css";
import { graphql, useStaticQuery } from "gatsby";

const InfoPage = (props) => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
        query InfoPageData {
            allMarkdownRemark {
                nodes {
                html            
                }
            }
        }
    `);

    return (
        <div className="infoPage">
            <div>
                {/* Slider with pictures */}
            </div>

            <div className="infoPageBody">
                <div dangerouslySetInnerHTML={{ __html: allMarkdownRemark.nodes[5].html }} />
                {/* <iframe width="335" height="315" src="https://www.youtube.com/embed/tSag6zL3o3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div >
        </div >
    );
}

export default InfoPage;
