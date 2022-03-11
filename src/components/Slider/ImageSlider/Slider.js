import React from 'react'
import * as styles from './Slider.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideElement from '../SlideElement/SlideElement';
import gun from "../../../images/gun.png"
import automobile from "../../../images/automobile.png"

const images = [gun, automobile];

export default function ImageSlider() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <SlideElement slideImage={image} key={index} />
        ))}
      </Slider>
    </div>
  )
}
