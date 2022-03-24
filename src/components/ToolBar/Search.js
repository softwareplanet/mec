import React, { useState } from "react";
import * as styles from "../RenderList/listsStyles.module.css";

import lookup from "../../images/lookup.svg";
import { Link } from "gatsby";

let Search = () => {
    let [searchState, setSearchState] = useState({
        query: ``,
        results: []
    })
    function getSearchResults(query) {
        let index = window.__FLEXSEARCH__.en.index
        let store = window.__FLEXSEARCH__.en.store
        if (!query || !index) {
          return []
        } else {
          let results = []
          Object.keys(index).forEach(idx => {
            results.push(...index[idx].values.search(query))
          })
    
          results = Array.from(new Set(results))
    
          let nodes = store
            .filter(node => (results.includes(node.id) ? node : null))
            .map(node => node.node)
    
          return nodes
        }
    }
    return (
        <>
            <img className={styles.lookup} src={lookup} alt="" />
            <input type="search" placeholder="Пошук..." autoComplete="off" value={searchState.query} onChange={(evt) => {
                    const query = evt.target.value; 
                    setSearchState({
                            query: query,
                            results: getSearchResults(query)
                    });
                }
            }/>
            <ul>
                {
                    searchState.results
                    .map(page => (
                        <li key={page.id}>
                            <Link to={page.slug.split('/').slice(-3,-1).join('/') + '/'}>{page.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Search;