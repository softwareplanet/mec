import React, { useState } from "react";
import * as styles from "./search.module.css";

import lookup from "../../images/lookup.svg";
import { Link } from "gatsby";

let Search = () => {
  let [searchState, setSearchState] = useState({
    query: ``,
    results: [],
  });
  function getSearchResults(query) {
    let index = window.__FLEXSEARCH__.uk.index;
    let store = window.__FLEXSEARCH__.uk.store;
    if (!query || !index) {
      return [];
    } else {
      let results = [];
      Object.keys(index).forEach((idx) => {
        results.push(...index[idx].values.search(query));
      });

      results = Array.from(new Set(results));

      let nodes = store
        .filter((node) => (results.includes(node.id) ? node : null))
        .map((node) => node.node);

      return nodes;
    }
  }
  return (
    <div className={styles.container}>
      <img className={styles.lookup} src={lookup} alt="" />
      <input
        className={styles.input}
        type="search"
        placeholder="Пошук..."
        autoComplete="off"
        value={searchState.query}
        onChange={(evt) => {
          const query = evt.target.value;
          setSearchState({
            query: query,
            results: getSearchResults(query.toLowerCase()),
          });
        }}
      />
      <ul className={styles.resultUl}>
        {searchState.results.map((page, i) => (
          <li className={styles.resultLi} key={i}>
            <Link to={"/" + page.slug.split("/").slice(-3, -1).join("/") + "/"}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Search;

