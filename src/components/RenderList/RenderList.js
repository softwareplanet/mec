import React, { useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import lookup from "../../images/lookup.svg"
import Switcher from "../Switcher/Switcher";
import "./RenderList.css"

let RenderList = ({ data }) => {
    let [view, setView] = useState('grid')

    return (
        <>
            <div className="toolbar">
                <img src={lookup} alt="" />
                <input type="search" placeholder="Пошук..." autoComplete="off" />
                <Switcher onViewChange={setView} />
            </div>
            <div className={view}>
                {
                    data.map(element =>
                        <CardComponent
                            key={element.name}                            
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