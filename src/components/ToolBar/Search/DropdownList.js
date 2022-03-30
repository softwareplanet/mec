import React from "react";
import { Link } from "gatsby";
import clsx from "clsx";

const DropdownList = ({ styles, results, isHidden, currEquip }) => {

    return (
        <ul className={styles.resultUl} id="resultsList" style={isHidden}>
            {results.map((page, i) => (
                <Link to={`/${page.slug}`} key={i}>
                    <li className={clsx(styles.resultLi, { [styles.active]: currEquip === page.slug })} key={i}>
                        {page.title}
                    </li>
                </Link>
            ))}
        </ul>
    )
}
export default DropdownList;