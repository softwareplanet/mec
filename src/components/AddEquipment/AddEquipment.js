import React, { useState, useEffect } from 'react';
import addContent from './add-content.svg';
import * as styles from './addequipment.module.css';
import PopUp from '../Pop-up/PopUp';

let AddEquipment = () => {
    const [showPopup, setShowPopup] = useState(false);

    function handlePopup(e) {
        e.preventDefault();
        setShowPopup(!showPopup);
    }

    return (
        <div>
            <a onClick={handlePopup}>
                <img
                    className={styles.add}
                    src={addContent}
                    width="27.5px"
                    alt=""
                />
            </a>
            <PopUp show={showPopup} closePopup={handlePopup} />
        </div>
    );
};

export default AddEquipment;
