import React from "react";
import Switcher from "../Switcher/Switcher";
import Search from "./Search";
import * as styles from "../RenderList/RenderList.module.css";

let ToolBar = ({ data, setView }) => {
    console.log(data);
    return (
        <div className={styles.toolbar}>
            <Search />
            <Switcher onViewChange={setView} />
        </div>
    )
}
export default ToolBar;