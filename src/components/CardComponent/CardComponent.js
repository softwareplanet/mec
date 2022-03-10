import React from 'react'

import "./CardComponent.css"

let CardComponent = ({title, image}) => {
    return (
        <div className="military-equipment">
            <img className="png-img" src={image} alt="" />
            <h2>{title}</h2>
        </div>
  )
}

export default CardComponent