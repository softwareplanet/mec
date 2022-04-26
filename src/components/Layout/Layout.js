import React, { useState } from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';
import useNotchDetector from '../../customHooks/NotchDetector';
import useCheckBrowser from '../../customHooks/CheckBrowser';
import { Helmet } from 'react-helmet';

const Layout = props => {
    const [height, setHeight] = useState(30);
    const iosWithNotch = useNotchDetector(false);
    const isBrowser = useCheckBrowser(false);
    let marginSize = height - 30;

    return (
        <div className={styles.layout}>
            <Helmet title="Meqd" defer={false} />
            <Header
                setHeight={setHeight}
                {...props}
                isIphone={iosWithNotch}
                isBrowser={isBrowser}
            />
            <main style={{ marginTop: marginSize }}>{props.children}</main>
            <Footer isIphone={iosWithNotch} isBrowser={isBrowser} />
        </div>
    );
};

export default Layout;
