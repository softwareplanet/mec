import React, { useState } from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';

const Layout = props => {
    const [height, setHeight] = useState(30);
    return (
        <div className={styles.layout}>
            <Header setHeight={setHeight} {...props} />
            <main style={{ marginTop: height - 20 }}>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
