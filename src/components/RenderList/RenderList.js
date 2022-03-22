import React, { useState } from 'react'
import CardComponent from '../CardComponent/CardComponent'
import ToolBar from '../ToolBar/ToolBar';
import * as styles from "./RenderList.module.css"

let RenderList = ({ data }) => {
    let [view, setView] = useState('grid')
    
    return (
        <>
            <ToolBar setView={setView}/>
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