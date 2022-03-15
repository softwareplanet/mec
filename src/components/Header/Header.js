import React from "react";
import tank from "../../images/tank_img.png"
import * as styles from "./Header.module.css"


let Header = (props) => {
    return (
        <div className={styles.head}>
            <img src={tank} alt="" className={styles.logo} />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Header