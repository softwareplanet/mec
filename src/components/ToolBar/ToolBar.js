import React from "react";
import Switcher from "../Switcher/Switcher";
import Search from "./Search/Search";
import * as styles from "../RenderList/listsStyles.module.css";

let ToolBar = ({ setView }) => {
    return (
        <div className={styles.toolbar}>
            <Search />
            <Switcher onViewChange={setView} />
        </div> 
    )
}
export default ToolBar;