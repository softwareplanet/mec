import React from 'react';
import * as styles from './SlideElement.module.css';
import vector from './vector.png'

export default function SlideElement({ slideImage, allImages, currentImage }) {
  return (
    <div className={styles.SlideElement}>
      <img src={slideImage} className={styles.imageSlide} alt='name' />
      <div className={styles.countImages}>
        <img src={vector} alt="vector" />
        <span>{currentImage} з {allImages}</span>
      </div>
    </div>
  )
}
