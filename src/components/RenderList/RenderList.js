import React, { useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import lookup from "../../images/lookup.svg"
import Switcher from "../Switcher/Switcher";
import * as styles from "./RenderList.module.css"

let RenderList = ({ data }) => {
    let [view, setView] = useState('grid')
    
    return (
        <>
            <div className={styles.toolbar}>
                <img className={styles.lookup} src={lookup} alt="" />
                <input type="search" placeholder="Пошук..." autoComplete="off" />
                <Switcher onViewChange={setView} />
            </div>
            <div className={styles[view]}>
                {
                    data.map(element =>
                        <CardComponent
                            key={element.name}  
                            path={element.name}                          
                            image={element[view + '_img'].childImageSharp}
                            title={element.title}
                            variant={view}
                        />)
                }
            </div>
        </>
    )
}

export default RenderList