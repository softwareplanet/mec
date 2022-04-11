import React, { useState } from 'react';
import SearchResults from '../Search/DropdownList.js';
import * as styles from '../Search/search.module.css';
import AddEquipment from '../../AddEquipment/AddEquipment';
import arrow from '../../../images/hideIcon.png';

const Dropdown = ({ data, currEquip }) => {
    const [hidden, setHide] = useState(true);
    return (
        <div className={styles.container} onClick={() => setHide(!hidden)}>
            <div className={styles.dropdown}>
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
