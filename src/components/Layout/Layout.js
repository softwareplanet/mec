import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';
import { Progressbar } from "../Progressbar/Progressbar";
import ProgressContext from './ProgressContext';

const Layout = props => {
    const [height, setHeight] = useState(30);
    let marginSize = height - 20

    const {progressState} = useContext(ProgressContext)

    return (
        <div className={styles.layout} style={{ marginBottom: progressState ? 70 : 0 }}>
            <Header setHeight={setHeight} {...props} />
            <main style={{ marginTop: marginSize }}>
                {props.children}
            </main>
            <Footer />
            <Progressbar />
        </div>
    );
};

export default Layout;
