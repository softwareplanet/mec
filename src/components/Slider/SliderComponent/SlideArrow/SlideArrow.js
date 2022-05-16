import React, { useEffect } from 'react';
import * as styles from './SlideArrow.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SlideArrow = ({
    currentSlide,
    slideCount,
    type,
    isModal,
    hide,
    ...props
}) => {
    const hideForwardArrow =
        currentSlide + 1 === slideCount ? `${styles.hidden}` : '';
    const hideBackArrow = currentSlide === 0 ? `${styles.hidden}` : '';
    const modalNextButton =
        currentSlide + 1 === slideCount ? (
            <button className={styles.modalNextArrow} onClick={hide}>
                <span>Готово</span>
            </button>
        ) : (
            <button className={styles.modalNextArrow} onClick={props.onClick}>
                <span>Далі</span>
            </button>
        );
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
    } else {
        arrow =
            type === 'next' ? (
                modalNextButton
            ) : (
                <button
                    className={`${styles.modalPrevArrow} ${hideBackArrow}`}
                    onClick={props.onClick}
                >
                    <span>Назад</span>
                </button>
            );
    }

    return (
        <div style={{ height: 'auto' }}>
            <div className={`${styles.arrow} `}>{arrow}</div>
        </div>
    );
};

export default SlideArrow;
