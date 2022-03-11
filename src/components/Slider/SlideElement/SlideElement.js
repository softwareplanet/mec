import React from 'react';
import * as styles from './SlideElement.module.css';

export default function SlideElement({ slideImage }) {
  return (
    <div>
      <img src={slideImage} className={styles.imageSlide} alt='name' />
    </div>
  )
}
