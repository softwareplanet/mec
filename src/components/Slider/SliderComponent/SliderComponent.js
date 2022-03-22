import React, { useState } from 'react'
import * as styles from './SliderComponent.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideElement from '../SlideElement/SlideElement';
import { getImage } from 'gatsby-plugin-image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const NextArrow = (props) => {
  return (
    <div className={styles.arrow}>
      <IoIosArrowForward className={styles.nextArrow} onClick={props.onClick} />
    </div>
  );
}

const PrevArrow = (props) => {
  return (
    <div className={styles.arrow}>
      <IoIosArrowBack className={styles.prevArrow} onClick={props.onClick} />
    </div>
  );
}

const SliderComponent = (props) => {

  const images = props.images.map(picture => getImage(picture));
  
  const settingsHorisontal = {
    adaptiveHeight: true,
    speed: 500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  
  const settingsVertical = {
    vertical: true,
    slidesToShow: images.length,
    swipe: false,
  }

  const [mode, setMode] = useState(settingsHorisontal);  

  return (
    <div id="track">
      <Slider {...mode}>
        {images.map((image, index) => (
          <div key={index} onClick={() => console.log(1)}>
          <SlideElement slideImage={image} allImages={images.length} currentImage={index + 1} />
            </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderComponent;