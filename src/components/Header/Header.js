import "./Header.css"
import React, { useState, useEffect } from "react";
import tank from "../../images/tank_img.png"
import Switcher from "../Switcher/Switcher";


let Header = () => {

    let [change, setChange] = useState(false)

    let clickHandler = (className) => {
        // if (!change) {
        //     setChange(!change)
        //     className = "icon active"
        //     console.log(className)
        // }
        // else {
            // setChange(!change)
            // className = "icon"
            console.log(className)
        // }
    }

    return (
        <div className="header">
            <div className="head">
                <img src={tank} alt="" className="logo" />
                <h1>Військова техніка</h1>
            </div>
            <div className="lookup">
                <input type="search" placeholder="Пошук..." autoComplete="off"/>
                <Switcher onClick={clickHandler}/>
            </div>
        </div>
    )
}

export default Header