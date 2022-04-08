import React from 'react';
import Switcher from '../Switcher/Switcher';
import Search from './Search/Search';
import AddEquipment from '../AddEquipment/AddEquipment';
import * as styles from '../RenderList/listsStyles.module.css';

let ToolBar = ({ setView }) => {
    return (
        <div className={styles.toolbar}>
            <Search />
            <Switcher onViewChange={setView} />
            <AddEquipment />
        </div>
    );
};
export default ToolBar;
