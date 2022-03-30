import React from "react";
import { Link } from "gatsby";

const SearchResults = ({ styles, results, isHidden }) => {

    return (
        <ul className={styles.resultUl} id="resultsList" style={isHidden}>
            {results.map((page, i) => (
                <Link to={page.slug} key={i}>
                    <li className={styles.resultLi} key={i}>
                        {page.title}
                    </li>
                </Link>
            ))}
        </ul>
    )
}
export default SearchResults;