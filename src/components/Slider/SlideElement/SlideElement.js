import React from 'react';
import * as styles from './SlideElement.module.css';
import vector from './vector.png'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function SlideElement({ slideImage, allImages, currentImage }) {
  return (
    <div className={styles.SlideElement}>
      <GatsbyImage className={styles.imageSlide} layout="fullWidth" image={slideImage} alt="" />
      <div className={styles.countImages}>
        <img src={vector} alt="vector" />
        <span>{currentImage} з {allImages}</span>
      </div>
    </div>
  )
}
