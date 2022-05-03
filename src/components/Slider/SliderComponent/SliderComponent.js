import React, { useState } from 'react';
import * as styles from './SliderComponent.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideElement from '../SlideElement/SlideElement';
import { getImage } from 'gatsby-plugin-image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BiImages } from 'react-icons/bi';
import ScrollUp from '../../../customFunctions/ScrollUp';

const NextArrow = ({ currentSlide, slideCount, ...props }) => {
    const hideArrow = currentSlide + 1 === slideCount ? `${styles.hidden}` : '';
    return (
        <div className={`${styles.arrow} ${hideArrow}`}>
            <IoIosArrowForward
                className={styles.nextArrow}
                onClick={props.onClick}
            />
        </div>
    );
};

const PrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const hideArrow = currentSlide === 0 ? `${styles.hidden}` : '';
    return (
        <div className={`${styles.arrow} ${hideArrow}`}>
            <IoIosArrowBack
                className={styles.prevArrow}
                onClick={props.onClick}
            />
        </div>
    );
};

const SliderComponent = props => {
    const images = props.images.map(picture => getImage(picture));
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleAfterChange = index => {
        setCurrentSlide(index);
    };

    const settingsHorizontal = {
        speed: 500,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        afterChange: handleAfterChange,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settingsVertical = {
        vertical: true,
        slidesToShow: images.length,
        swipe: false,
    };

    const [mode, setMode] = useState(settingsHorizontal);
    const [isVertical, setIsVertical] = useState('');

    return (
        <div className={styles.sliderContainer}>
            <div className={mode.slidesToShow > 1 ? 'vertical' : ''}>
                <Slider {...mode}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setMode(
                                    mode.slidesToShow === 1
                                        ? settingsVertical
                                        : settingsHorizontal
                                );
                                setIsVertical(
                                    mode.hasOwnProperty('vertical')
                                        ? ''
                                        : `${styles.counter}`
                                );
                            }}
                        >
                            <div onClick={() => ScrollUp('auto')}>
                                <SlideElement
                                    slideImage={image}
                                    allImages={images.length}
                                    currentImage={index + 1}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={`${styles.countImages} ${isVertical}`}>
                <BiImages className={styles.img} />
                <span>
                    {currentSlide + 1} з {images.length}
                </span>
            </div>
        </div>
    );
};

export default SliderComponent;
