import React, { useState } from "react";
import SearchResults from "../Search/DropdownList.js"
import * as styles from "../Search/search.module.css";
import arrow from "../../../images/hideIcon.png";

const Dropdown = ({ data, currEquip }) => {
    const [hidden, setHide] = useState(true);
    return (
        <div className={styles.container} onClick={() => setHide(!hidden)}>
            <div className={styles.dropdown}>
                <span>{currEquip}</span>
                <img src={arrow} style={hidden ? {transform: "rotate(0deg)"} : {transform: "rotate(180deg)"} }/>
            </div>
            <SearchResults currEquip={currEquip} isHidden={hidden ? {display: "none"} : {display: "block"}} styles={styles} results={
                data.map((node) => ({
                    slug: node.slug,
                    title: node.frontmatter.title
                }))
            }/>
        </div>
    )
}
export default Dropdown;