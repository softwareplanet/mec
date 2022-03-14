import React from "react";
import "./Switcher.css"
import {CgMenuGridR} from "react-icons/cg"
import {VscListFlat} from "react-icons/vsc"

let Switcher = (props) => {

    let changeClass = event => {
        props.onClick(event.target.parentElement)
    }

    return (
        <div className="switch" onClick={changeClass}>
            <button className="icon"><CgMenuGridR /></button>
            <button className="icon active"><VscListFlat /></button>
        </div>
    )
}

export default Switcher