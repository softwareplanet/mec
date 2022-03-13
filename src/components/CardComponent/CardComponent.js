import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import "./CardComponent.css"

let CardComponent = ({title, image}) => {
    return (
        <div className="military-equipment">
            <div className="img-container">
                <GatsbyImage imgClassName="png-img" image={getImage(image)} alt={title} />
            </div>
            <h2>{title}</h2>
        </div>
  )
}

export default CardComponent