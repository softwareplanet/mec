import React, { useContext } from "react";
import * as styles from "./Switcher.module.css"
import { CgMenuGridR } from "react-icons/cg"
import { VscListFlat } from "react-icons/vsc"
import ViewContext from "../RenderList/Context";


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
            <SwitcherIcon
                onClick={iconClickHandler}
                currentView={view}
                view={view == 'grid' ? 'list' : 'grid'}
                icon={view == 'grid' ? VscListFlat : CgMenuGridR}
            />
        </div>
    );
};

function SwitcherIcon({ onClick, view, icon }) {
    return (
        <div className={styles.icon} onClick={() => onClick(view)}>
            {React.createElement(icon, { className: styles.svgIcon })}
        </div>
    )
}

export default Switcher