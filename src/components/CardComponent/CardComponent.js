import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import "./CardComponent.css"

let CardComponent = ({title, image}) => {
    return (
        <div className="military-equipment">
            <GatsbyImage className="png-img" src={image} alt="" />
            <h2>{title}</h2>
        </div>
  )
}

export default CardComponent