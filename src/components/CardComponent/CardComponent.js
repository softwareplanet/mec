import React from 'react'
import Image  from 'gatsby-image'

import "./CardComponent.css"

let CardComponent = ({title, image}) => {
    return (
        <div className="military-equipment">
            <Image className="png-img" fluid={image.fluid} fixed={image.fixed} alt={title} />
            <h2>{title}</h2>
        </div>
  )
}

export default CardComponent