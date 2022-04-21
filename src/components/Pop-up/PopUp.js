import React, { useState } from 'react';
import * as styles from './PopUp.module.css';
import { MdClose } from 'react-icons/md';

export default function PopUp({ show, first, closePopup }) {
    const [isFirst, setIsFirst] = useState(false);

    let hidePopup = show ? `${styles.show}` : `${styles.hide}`;

    return (
        <div className={`${styles.popup} ${hidePopup}`}>
            <div className={styles.container}>
                <MdClose className={styles.closeButton} onClick={closePopup} />
                <div className={styles.popupInfo}>
                    <h2>Бажаєте додати новий контент?</h2>
                    <p>
                        Для додавання нового контенту потрібно заповнити форму.
                        Натискаючи "Додати", ви погоджуєтесь перейти на{' '}
                        <span>Google Forms</span>, де ви можете це зробити
                    </p>
                    <a
                        href="https://forms.gle/duzBeUo43YXPPDDe7"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.addButton}
                    >
                        Додати
                    </a>
                </div>
            </div>
        </div>
    );
}
