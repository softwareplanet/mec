import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import "./CardComponent.css"
import { Link } from 'gatsby'

let CardComponent = ({name, title, image}) => {
    return (
        <Link to={`/${name}`} className="link-view">
            <div className="military-equipment">
                <div className="img-container">
                    <GatsbyImage imgClassName="png-img" image={getImage(image)} alt={title} />
                </div>
                <h2>{title}</h2>
            </div>
        </Link>
        
  )
}

export default CardComponent