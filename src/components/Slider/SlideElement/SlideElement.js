import React from 'react';
import * as styles from './SlideElement.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function SlideElement({ slideImage, allImages, currentImage }) {
    return (
        <div className={styles.SlideElement}>
            <GatsbyImage image={slideImage} alt="Slide image" />
        </div>
    );
}
