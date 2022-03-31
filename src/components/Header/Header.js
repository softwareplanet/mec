import { Link } from "gatsby";
import React from "react";
import { FaRegEdit } from 'react-icons/fa';
import tank from "./tank.svg"
import addContent from "./add-content.svg"
import * as styles from "./Header.module.css"
import arrow from "../../equipment/images/arrow-left.png";

let Header = (props) => {
    return (
        <div className={styles.container}>
            <Link to={props.backPath || "/"}>
                <div className={styles.head}>
                    {props.backPath ? <img height="24px" src={arrow} /> : <img src={tank} alt="" className={styles.logo} />}
                    <h1>{props.name}</h1>
                </div>
            </Link>
            <a href="https://forms.gle/JkwZaui4AjKtvZDe6" target="_blank" rel="noreferrer" >
                <img src={addContent} width="35px" alt="" />
            </a>
        </div>
    )
}

export default Header