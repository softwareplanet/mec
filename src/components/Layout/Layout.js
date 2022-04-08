import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';
import { useSwipeable } from 'react-swipeable';

const Layout = props => {
    const [height, setHeight] = useState(30);
    let marginSize = height - 20;

    const handlers = useSwipeable({
        onSwipedRight: () => {
            if (
                typeof window !== 'undefined' &&
                window.location.pathname !== '/'
            ) {
                window.location.pathname = props.backPath;
            }
        },
    });

    return (
        <div className={styles.layout} {...handlers}>
            <Header setHeight={setHeight} {...props} />
            <main style={{ marginTop: marginSize }}>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
