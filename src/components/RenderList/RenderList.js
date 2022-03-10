import React from 'react'

import "./RenderList.css"


import CardComponent from '../CardComponent/CardComponent'

let RenderList = ({data}) => {
    let grid = true
    return (
        <div className={grid ? 'categories grid' : 'categories list'}>
            {
            data.map(element => 
                <CardComponent  key={element.name} image={grid ? element.GridImage:element.ListImage} title={element.title}/>)
            }
        </div>
    )
}

export default RenderList