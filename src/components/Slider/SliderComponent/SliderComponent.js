import React from 'react'
import * as styles from './SliderComponent.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideElement from '../SlideElement/SlideElement';
import gun from '../../../equipment/tanks/t-90/images/pic2.png';
import arrow from './arrow.png'

const NextArrow = (props) => {
  return (
    <div className={styles.arrow}>
      <span className={styles.nextArrow} onClick={props.onClick}>
        <img src={arrow} alt="nextArrow" />
      </span>
    </div>
  );
}

const PrevArrow = (props) => {
  return (
    <div className={styles.arrow}>
      <span className={styles.prevArrow} onClick={props.onClick}>
        <img src={arrow} alt="nextArrow" />
      </span>
    </div>
  );
}

const SliderComponent = () => {

  const images = [gun, gun, gun];
  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <SlideElement slideImage={image} key={index} allImages={images.length} currentImage={index + 1} />
        ))}
      </Slider>
    </div>
  )
}

export default SliderComponent;