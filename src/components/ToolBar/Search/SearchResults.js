import React from "react";
import { Link } from "gatsby";

const SearchResults = ({styles, results}) => {
    <ul className={styles.resultUl}>
        {results.map((page, i) => (
            <Link to={"/" + page.slug.split("/").slice(-3, -1).join("/") + "/"} key={i}>
                <li className={styles.resultLi} key={i}>
                    {page.title}
                </li>
            </Link>
        ))}
      </ul>
}
export default SearchResults;