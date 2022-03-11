import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import "./CardComponent.css"

let CardComponent = ({title, image}) => {
    return (
        <div className="military-equipment">
            <GatsbyImage className="png-img" image={getImage(image)} alt={title} />
            <h2>{title}</h2>
        </div>
  )
}

export default CardComponent