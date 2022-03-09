import React from "react";
import tank from "../images/tank_img.png"
import gridView from "../images/grid_view.png"
import listView from "../images/list_view.png"

let Header = () => {
    return (
        <div className="header">
            <img src={tank} alt="" className="logo" />
            <h1>Військова техніка</h1>
            <div className="change-display">
                <img src={gridView} alt="" />
                <img className="active" src={listView} alt="" />
            </div>
        </div>
    )
}

export default Header