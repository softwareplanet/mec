import React, { useEffect } from 'react';
import * as styles from './PopUp.module.css';
import { MdClose } from 'react-icons/md';
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
                <MdClose className={styles.closeButton} onClick={closePopup} />
                <div className={styles.popupInfo}>
                    <h2>Бажаєте додати новий контент?</h2>
                    <p>
                        Для додавання нового контенту потрібно заповнити форму.
                        Натискаючи "Додати",&nbsp; ви погоджуєтесь перейти на{' '}
                        <span>Google Forms</span>,&nbsp; де ви можете це зробити
                    </p>

                    <button onClick={setFirst} className={styles.addButton}>
                        Додати
                    </button>
                </div>
            </div>
        </div>
    );
}
