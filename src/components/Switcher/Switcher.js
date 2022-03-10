import React from "react";
import "./Switcher.css"
import gridView from "../../images/gridView.svg"
import listView from "../../images/listView.svg"

let Switcher = () => {
    return (
        <div className="switch">
            <img src={gridView} alt="" />
            <img className="active" src={listView} alt="" />
        </div>
    )
}

export default Switcher