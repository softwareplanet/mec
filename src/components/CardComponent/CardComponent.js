import React from 'react'
import clsx from 'clsx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from "./CardComponent.module.css"
import { Link } from 'gatsby'

let CardComponent = ({path, title, image, variant, size, gap, lastInRow}) => {    
    const linkStyles = {};
     if (variant === 'grid')
        Object.assign(linkStyles, {
            width: `${size}px`, 
            height: `${size}px`, 
            marginBottom: `${gap}px`, 
            marginRight: lastInRow ? 0 : `${gap}px` 
        });
    return (
        <Link to={`/${path}`} className={styles.linkView} style={linkStyles}>
            <div className={clsx(styles[variant], styles.militaryEquipment)}>
                <div className={styles.imgContainer}>
                    <GatsbyImage imgClassName={styles.pngImg} image={getImage(image)} alt={title} />
                </div>
                <h2>{title}</h2>
            </div>
        </Link>
        
  )
}

export default CardComponent