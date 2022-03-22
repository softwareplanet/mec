import React from "react";
import * as styles from "../RenderList/RenderList.module.css";
import lookup from "../../images/lookup.svg";
let Search = () => {
    return (
        <>
            <img className={styles.lookup} src={lookup} alt="" />
            <input type="search" placeholder="Пошук..." autoComplete="off" />
        </>
    )
}
export default Search;