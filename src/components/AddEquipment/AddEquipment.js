import React from 'react';
import addContent from './add-content.svg';
import * as styles from './addequipment.module.css';

let AddEquipment = () => {
    return (
        <a
            href="https://forms.gle/duzBeUo43YXPPDDe7"
            target="_blank"
            rel="noreferrer"
        >
            <img
                className={styles.add}
                src={addContent}
                width="27.5px"
                alt=""
            />
        </a>
    );
};

export default AddEquipment;
