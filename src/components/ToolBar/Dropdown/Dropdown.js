import React, { useState } from 'react';
import SearchResults from '../Search/DropdownList.js';
import * as styles from '../Search/dropdown.module.css';
import addContent from '../add-content.svg';
import arrow from '../../../images/hideIcon.png';

const Dropdown = ({ data, currEquip }) => {
    const [hidden, setHide] = useState(true);
    return (
        <div className={styles.container}>
            <div className={styles.dropdown} onClick={() => setHide(!hidden)}>
                <img
                    src={arrow}
                    style={
                        hidden
                            ? { transform: 'rotate(0deg)' }
                            : { transform: 'rotate(180deg)' }
                    }
                />
                <span>{currEquip.frontmatter.title}</span>
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
            <a
                href="https://forms.gle/JkwZaui4AjKtvZDe6"
                target="_blank"
                rel="noreferrer"
            >
                <img src={addContent} width="35px" alt="" />
            </a>
        </div>
    );
};
export default Dropdown;
