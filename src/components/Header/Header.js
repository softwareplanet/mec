import "./Header.css"
import React from "react";
import tank from "../../images/tank_img.png"
import Switcher from "../Switcher/Switcher";


let Header = () => {
    return (
        <div className="header">
            <div className="head">
                <img src={tank} alt="" className="logo" />
                <h1>Військова техніка</h1>
            </div>
            <div className="lookup">
                <input type="search" placeholder="Пошук..." autoComplete="off"/>
                <Switcher />
            </div>
        </div>
    )
}

export default Header