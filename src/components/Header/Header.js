import React from "react";
import tank from "../../images/tank_img.png"
import * as styles from "./Header.module.css"


let Header = () => {
    return (
        <div className={styles.head}>
            <img src={tank} alt="" className={styles.logo} />
            <h1>Військова техніка</h1>
        </div>
    )
}

export default Header