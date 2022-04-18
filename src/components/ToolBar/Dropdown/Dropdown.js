import React, { useEffect, useState } from 'react';
import SearchResults from '../Search/DropdownList.js';
import * as styles from '../Search/search.module.css';
import AddEquipment from '../../AddEquipment/AddEquipment';
import arrow from '../../../images/hideIcon.png';

const Dropdown = ({ data, currEquip }) => {
    const [hidden, setHide] = useState(true);
    const [iosWithNotch, setIosWithNotch] = useState(false);

    const isIPhoneWithNotch = () => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
            let iHeight = window.screen.height;
            let iWidth = window.screen.width;

            if (
                iWidth >= 375 &&
                iHeight >= 812 &&
                /iPhone/.test(navigator.userAgent) &&
                !window.MSStream
            )
                return true;
        }
    };

    useEffect(() => {
        setIosWithNotch(isIPhoneWithNotch());
    }, []);

    const isIphone = iosWithNotch
        ? `${styles.iosDropdown}`
        : `${styles.dropdown}`;
    return (
        <div className={styles.container} onClick={() => setHide(!hidden)}>
            <div className={isIphone}>
                <span>{currEquip.frontmatter.title}</span>
                <img
                    src={arrow}
                    style={
                        hidden
                            ? { transform: 'rotate(0deg)' }
                            : { transform: 'rotate(180deg)' }
                    }
                />
            </div>
            <SearchResults
                currEquip={currEquip.slug}
                isHidden={{ display: hidden ? 'none' : 'block' }}
                styles={styles}
                results={data.map(node => ({
                    slug: node.slug,
                    title: node.frontmatter.title,
                }))}
            />
            <div className={styles.addEquipment}>
                <AddEquipment />
            </div>
        </div>
    );
};
export default Dropdown;
