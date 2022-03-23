import React, { useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import ToolBar from '../ToolBar/ToolBar';
import * as styles from "./RenderList.module.css"
import addEmptySpaces  from "./EmptySpaces";

let RenderList = ({ data, searchData }) => {
    let [view, setView] = useState('grid')

    return (
        <>
            <ToolBar setView={setView} data={searchData} />
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
                { typeof window !== `undefined` ? addEmptySpaces(window.innerWidth, data.length) : () => {} }
            </div>
        </>
    )
}

export default RenderList