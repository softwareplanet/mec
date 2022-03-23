import React, { useState } from "react";
import * as styles from "../RenderList/RenderList.module.css";
import lookup from "../../images/lookup.svg";
import {Index} from 'elasticlunr';
import { Link } from "gatsby";


let Search = ({searchIndex}) => {
    let [searchState, setSearchState] = useState({
        query: ``,
        results: []
    })

    const getIndex = () => Index.load(searchIndex);
    return (
        <>
            <img className={styles.lookup} src={lookup} alt="" />
            <input type="search" placeholder="Пошук..." autoComplete="off" value={searchState.query} onChange={(evt) => {
                const query = evt.target.value; 
                const index = getIndex();
                
                    setSearchState({
                        query: query,
                        results: index.search(query).map(({
                            ref,
                        }) => {
                            console.log(query);
                            return index.documentStore.getDoc(ref)}),
                    });
                }
            }/>
            <ul>
                {
                    searchState.results
                    .map(page => (
                        <li key={page.id}>
                            <Link to={page.slug}>{page.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Search;