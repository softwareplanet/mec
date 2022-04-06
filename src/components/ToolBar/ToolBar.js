import React from "react";
import Switcher from "../Switcher/Switcher";
import Search from "./Search/Search";
import addContent from "./add-content.svg"
import * as styles from "../RenderList/listsStyles.module.css";

let ToolBar = ({ setView }) => {
    return (
        <div className={styles.toolbar}>
            <Search />
            <Switcher onViewChange={setView} />
            <a href="https://forms.gle/JkwZaui4AjKtvZDe6" target="_blank" rel="noreferrer" >
                <img src={addContent} width="35px" alt="" />
            </a>
        </div> 
    )
}
export default ToolBar;