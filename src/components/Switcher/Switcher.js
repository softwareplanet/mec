import React, { useContext } from "react";
import * as styles from "./Switcher.module.css"
import { CgMenuGridR } from "react-icons/cg"
import { VscListFlat } from "react-icons/vsc"
import clsx from "clsx"
import ViewContext from "../Layout/layoutContext";


let Switcher = (props) => {

    const {view, setView} = useContext(ViewContext)

    let iconClickHandler = (v) => {
        setView(v);
        if (props.onViewChange) {
            props.onViewChange(v);
        }
    }

    return (
        <div className={styles.switcher}>
            <SwitcherIcon onClick={iconClickHandler} currentView={view} view="grid" icon={CgMenuGridR} /> 
            <SwitcherIcon onClick={iconClickHandler} currentView={view} view="list" icon={VscListFlat} /> 
        </div>
    )
}

function SwitcherIcon({onClick, view, currentView, icon}) {
    return (
        <div className={styles.icon} onClick={() => onClick(view)} >
            {React.createElement(icon, {className: clsx(styles.svgIcon, { [styles.active]: view === currentView })})}
        </div>
    )
}

export default Switcher