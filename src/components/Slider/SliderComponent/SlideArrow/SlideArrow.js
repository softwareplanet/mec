import React from 'react';
import * as styles from './SlideArrow.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SlideArrow = ({ currentSlide, slideCount, type, isModal, ...props }) => {
    const hideForwardArrow =
        currentSlide + 1 === slideCount ? `${styles.hidden}` : '';
    const hideBackArrow = currentSlide === 0 ? `${styles.hidden}` : '';
    let arrow = '';

    if (!isModal) {
        arrow =
            type === 'next' ? (
                <IoIosArrowForward
                    className={`${styles.nextArrow} ${hideForwardArrow}`}
                    onClick={props.onClick}
                />
            ) : (
                <IoIosArrowBack
                    className={`${styles.prevArrow} ${hideBackArrow}`}
                    onClick={props.onClick}
                />
            );
    }

    return (
        <div>
            <div className={`${styles.arrow} `}>{arrow}</div>
        </div>
    );
};

export default SlideArrow;
