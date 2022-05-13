import React, { useEffect } from 'react';
import * as styles from './PopUp.module.css';
import noScroll from 'no-scroll';

export default function PopUp({ show, setFirst, closePopup }) {
    const showPopup = show ? `${styles.active}` : '';

    useEffect(() => {
        if (show) {
            noScroll.on();
        }

        return () => noScroll.off();
    });

    return (
        <div className={`${styles.popup} ${showPopup}`} onClick={closePopup}>
            <div
                className={styles.container}
                onClick={e => e.stopPropagation()}
            >
                <div className={styles.popupInfo}>
                    <h2>Бажаєте додати новий контент?</h2>
                    <p>
                        Для додавання нового контенту потрібно заповнити форму.
                        Натискаючи "Додати",&nbsp; ви погоджуєтесь перейти на{' '}
                        <span>Google Forms</span>,&nbsp; щоб залишити свій
                        коментар або запропонувати новий вид техніки до каталогу
                    </p>
                    <div className={styles.buttons}>
                        <button
                            onClick={closePopup}
                            className={styles.closeButton}
                        >
                            Не додавати
                        </button>
                        <button onClick={setFirst} className={styles.addButton}>
                            Додати
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
