import React from "react";
import tank from "../../images/tank_img.png"
import "./Header.css"


let Header = () => {
    return (
        <div className="head">
            <img src={tank} alt="" className="logo" />
            <h1>Військова техніка</h1>
        </div>
    )
}

export default Header