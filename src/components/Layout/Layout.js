import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';
import { Progressbar } from "../Progressbar/Progressbar";

const Layout = props => {
    const [height, setHeight] = useState(30);
    let marginSize = height - 20

    return (
        <div className={styles.layout}>
            <Header setHeight={setHeight} {...props} />
            <main style={{ marginTop: marginSize}}>
                {props.children}
            </main>
            <Footer />
            <Progressbar />
        </div>
    );
};

export default Layout;
