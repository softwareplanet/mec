import React from "react";
import { Link } from "gatsby";

const DropdownList = ({ styles, results, isHidden, currEquip }) => {

    return (
        <ul className={styles.resultUl} id="resultsList" style={isHidden}>
            {results.map((page, i) => (
                <Link to={`/${page.slug}`} key={i}>
                    <li className={currEquip === page.title ? `${styles.resultLi} ${styles.active}`: styles.resultLi} key={i}>
                        {page.title}
                    </li>
                </Link>
            ))}
        </ul>
    )
}
export default DropdownList;