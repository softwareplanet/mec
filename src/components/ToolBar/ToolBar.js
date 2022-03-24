import React from "react";
import Switcher from "../Switcher/Switcher";
import Search from "./Search";
import * as styles from "../RenderList/listsStyles.module.css";
import { graphql, StaticQuery } from "gatsby";

let ToolBar = ({ setView }) => {
    return (
        <div className={styles.toolbar}>
            <Search />
            <Switcher onViewChange={setView} />
        </div> 
    )
}
export default ToolBar;