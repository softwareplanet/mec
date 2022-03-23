import React, { useState } from "react";
import * as styles from "../RenderList/RenderList.module.css";
import lookup from "../../images/lookup.svg";
import {Index} from 'elasticlunr';


let Search = ({searchIndex}) => {
    let [searchState, setSearchState] = useState({
        query: ``,
        results: []
    })
    console.log(searchState);
    const getIndex = () => Index.load(searchIndex);
    return (
        <>
            <img className={styles.lookup} src={lookup} alt="" />
            <input type="search" placeholder="Пошук..." autoComplete="off" value={searchState.query} onChange={(evt) => {
                const query = evt.target.value; 
                const index = getIndex();
                    setSearchState({
                        query,
                        results: index.search(query).map(({
                            ref,
                        }) => index.documentStore.getDoc(ref)),
                    });
                }
            }/>
            <ul>
                {

                }
            </ul>
        </>
    )
}
export default Search;