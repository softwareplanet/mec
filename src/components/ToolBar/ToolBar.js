import React from "react";
import Switcher from "../Switcher/Switcher";
import Search from "./Search";
import * as styles from "../RenderList/RenderList.module.css";
import { graphql, StaticQuery } from "gatsby";

let ToolBar = ({ setView }) => {
    return (
        <StaticQuery 
            query={graphql`
                query SearchIndexQuery {
                    siteSearchIndex {
                        index
                    }
                }    
            `} 
            render={data => (
                <div className={styles.toolbar}>
                    <Search searchIndex={data.siteSearchIndex.index}/>
                    <Switcher onViewChange={setView} />
                </div>
            )
        }/>
        
    )
}
export default ToolBar;