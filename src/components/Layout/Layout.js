import useNotchDetector from '../../customHooks/NotchDetector';
import useCheckBrowser from '../../customHooks/CheckBrowser';
import { Helmet } from 'react-helmet';
import React, { useState, useContext } from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';
import { Progressbar } from '../Progressbar/Progressbar';
import ProgressContext from './ProgressContext';

const Layout = props => {
    const [height, setHeight] = useState(30);
    const iosWithNotch = useNotchDetector(false);
    const isBrowser = useCheckBrowser(false);
    let marginSize = height - 30;

    const { progressState } = useContext(ProgressContext);

    return (
        <div
            className={styles.layout}
            style={{ marginBottom: progressState ? 70 : 0 }}
        >
            <Helmet title="Meqd" defer={false} />
            <Header
                setHeight={setHeight}
                {...props}
                isIphone={iosWithNotch}
                isBrowser={isBrowser}
            />
            <main style={{ marginTop: marginSize }}>{props.children}</main>
            <Footer isIphone={iosWithNotch} isBrowser={isBrowser} />
            <Progressbar />
        </div>
    );
};

export default Layout;
