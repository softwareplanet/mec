import React, { useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import lookup from "../../images/lookup.svg"
import Switcher from "../Switcher/Switcher";
import "./RenderList.css"

let RenderList = ({ data }) => {
    let [grid, setGrid] = useState(true)

    let gridChangeHandler = view => {
        if (view === "grid") {
            setGrid(true)
        } else {
            setGrid(false)
        }
    }

    return (
        <>
            <div className="toolbar">
                <img src={lookup} alt="" />
                <input type="search" placeholder="Пошук..." autoComplete="off" />
                <Switcher onViewChange={gridChangeHandler} />
            </div>
            <div className={grid ? "grid" : "list"}>
                {
                    data.map(element =>
                        <CardComponent
                            key={element.name}
                            image={grid ? element.grid_img.childImageSharp : element.list_img.childImageSharp}
                            title={element.title}
                        />)
                }
            </div>
        </>
    )
}

export default RenderList