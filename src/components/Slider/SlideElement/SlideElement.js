import React from 'react';
import * as styles from './SlideElement.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BiImages } from 'react-icons/bi';

export default function SlideElement({ slideImage, allImages, currentImage }) {
  return (
    <div className={styles.SlideElement}>
      <GatsbyImage
        image={slideImage}
        // imgStyle={{ objectFit: 'contain', maxWidth: '100%' }}
        // style={{ height: '50vh' }}
        alt="Slide image"
      />
      <div className={styles.countImages}>
        <BiImages className={styles.img} />
        <span>{currentImage} з {allImages}</span>
      </div>
    </div>
  )
}
