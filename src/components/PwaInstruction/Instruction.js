import React, { useEffect } from 'react';
import * as styles from './Instruction.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import noScroll from 'no-scroll';
import Slider from 'react-slick';
import SlideArrow from '../Slider/SliderComponent/SlideArrow/SlideArrow';

export default function Instruction() {
    useEffect(() => {
        noScroll.on();
    });

    const settings = {
        speed: 100,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlideArrow type="next" isModal={false} />,
        prevArrow: <SlideArrow isModal={false} />,
    };

    return (
        <div className={styles.instruction}>
            <div className={styles.container}>
                <Slider {...settings}>
                    <div className={styles.slideElement}>
                        <h3>
                            Щоб додати застосунок на початковий екран, потрібно
                            натиснути на іконку “Поділіться”{' '}
                        </h3>
                    </div>
                    <div className={styles.slideElement}>
                        <h3>Some text</h3>
                    </div>
                    <div className={styles.slideElement}>
                        <h3>Some text</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
