import React from 'react'
import clsx from 'clsx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from "./CardComponent.module.css"
import { Link } from 'gatsby'

let CardComponent = ({name, title, image, variant}) => {
    return (
        <Link to={`/${name}`} className={styles.linkView}>
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