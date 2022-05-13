import React, { useEffect, useState } from 'react';
import * as styles from './Instruction.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import noScroll from 'no-scroll';
import Slider from 'react-slick';
import SlideArrow from '../Slider/SliderComponent/SlideArrow/SlideArrow';
import firstSlide from './slideImages/slide(1).png';
import secondSlide from './slideImages/slide(2).png';
import thirdSlide from './slideImages/slide(3).png';

export default function Instruction({ fewLinks }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [pwa, setPwa] = useState();
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        setPwa(localStorage.getItem('pwa'));
        if (!pwa && fewLinks) {
            noScroll.on();
        } else {
            noScroll.off();
        }
    });

    let showInstructions =
        !pwa && fewLinks ? `${styles.show}` : `${styles.hide}`;

    function hideInstructions(e) {
        e.preventDefault();
        setRerender(!rerender);
        localStorage.setItem('pwa', 'true');
        setPwa(localStorage.getItem('pwa'));
    }

    const handleAfterChange = index => {
        setCurrentSlide(index);
    };

    const settings = {
        speed: 0,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        afterChange: handleAfterChange,
        nextArrow: (
            <SlideArrow type="next" isModal={true} hide={hideInstructions} />
        ),
        prevArrow: <SlideArrow isModal={true} />,
    };

    return (
        <div className={`${styles.instruction} ${showInstructions}`}>
            <div className={styles.container}>
                <Slider {...settings}>
                    <div className={styles.slideElement}>
                        <img
                            src={firstSlide}
                            alt=""
                            style={{ maxWidth: '100vw' }}
                        />
                    </div>
                    <div className={styles.slideElement}>
                        <img
                            src={secondSlide}
                            alt=""
                            style={{ maxWidth: '100vw' }}
                        />
                    </div>
                    <div className={styles.slideElement}>
                        <img
                            src={thirdSlide}
                            alt=""
                            style={{ maxWidth: '100vw' }}
                        />
                    </div>
                </Slider>
            </div>
            <div className={styles.counter}>
                <span>{currentSlide + 1} </span>/ 3
            </div>
        </div>
    );
}
