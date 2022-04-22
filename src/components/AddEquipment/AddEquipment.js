import React, { useState } from 'react';
import addContent from './add-content.svg';
import * as styles from './addequipment.module.css';
import PopUp from '../Pop-up/PopUp';

const AddEquipment = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isFirst, setIsFirst] = useState(false);

    function handlePopup(e) {
        e.preventDefault();
        setShowPopup(!showPopup);
    }

    function handleFirstClick(e) {
        e.preventDefault();
        window.open('https://forms.gle/duzBeUo43YXPPDDe7', '_blank');
        setIsFirst(true);
        handlePopup(e);
    }

    return (
        <div>
            {isFirst ? (
                <a
                    href="https://forms.gle/duzBeUo43YXPPDDe7"
                    target="_blank"
                    rel="noreferer"
                >
                    <img
                        className={styles.add}
                        src={addContent}
                        width="27.5px"
                        alt=""
                    />
                </a>
            ) : (
                <a onClick={handlePopup}>
                    <img
                        className={styles.add}
                        src={addContent}
                        width="27.5px"
                        alt=""
                    />
                </a>
            )}

            <PopUp
                show={showPopup}
                first={isFirst}
                closePopup={handlePopup}
                setFirst={handleFirstClick}
            />
        </div>
    );
};

export default AddEquipment;
