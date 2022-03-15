import { Link } from "gatsby";
import React from "react";
import tank from "../../images/tank_img.png"
import * as styles from "./Header.module.css"
import { IoIosArrowBack } from "react-icons/io";

let Header = (props) => {
    return (
        <Link to={props.backPath || "/"}>
            <div className={styles.head}>
                {props.backPath ? <IoIosArrowBack /> : <img src={tank} alt="" className={styles.logo} />}
                <h1>{props.name}</h1>
            </div>
        </Link>
    )
}

export default Header