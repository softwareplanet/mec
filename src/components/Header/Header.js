import "./Header.css"
import React from "react";
import tank from "../../images/tank_img.png"
import gridView from "../../images/gridView.svg"
import listView from "../../images/listView.svg"

let Header = () => {
    return (
        <div className="header">
            <div className="head">
                <img src={tank} alt="" className="logo" />
                <h1>Військова техніка</h1>
            </div>
            <div className="lookup">
                <input type="search" placeholder="Пошук..." autoComplete="off"/>
                <img src={gridView} alt="" />
                <img className="active" src={listView} alt="" />
            </div>
        </div>
    )
}

export default Header