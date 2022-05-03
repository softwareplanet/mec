import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import SortList from '../../../customFunctions/SortList';

const DropdownList = ({ styles, results, isHidden, currEquip }) => {
    const sortResult = SortList(results);

    return (
        <ul className={styles.resultUl} id="resultsList" style={isHidden}>
            {sortResult.map((page, i) => (
                <Link to={`/${page.slug}`} key={i}>
                    <li
                        className={clsx(styles.item, {
                            [styles.active]: currEquip === page.slug,
                        })}
                        key={i}
                    >
                        {page.title}
                    </li>
                </Link>
            ))}
        </ul>
    );
};
export default DropdownList;
