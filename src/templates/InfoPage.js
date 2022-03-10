import React from "react";
import styles from "./InfoPage.css";
import tank from "../images/tankT90.png"
import { graphql } from "gatsby";

const InfoPage = (props) => {
    console.log(
        graphql`
    query Markdowns {
        allMarkdownRemark {
            nodes {
              html            
            }
        }
    }
`
    );

    return (
        <div className="infoPage">
            <div>
                {/* <img src={tank} /> */}
            </div>

            <div className="infoPageBody">
                {/* <h1>Т-90 «Владімір»</h1>
                <p>
                    Cучасний російський основний бойовий танк. Танки Т-90 та Т-90А обладнані комплексом «Айнет»
                    що дозволяє вести вогонь снарядами з дистанційним підривом. Ці снаряди перевершують звичайні
                    осколково-фугасні 3ОФ26 у 5-7 разів за ефективністю ураження живої сили.
                </p>                
                <div className="infoTable"><h2>Вага</h2></div>
                <h2>Вразливі місця</h2> */}
            </div >
        </div >
    );
}

export default InfoPage

export const query = graphql`
    query Markdowns {
        allMarkdownRemark {
            nodes {
              html            
            }
        }
    }
`;