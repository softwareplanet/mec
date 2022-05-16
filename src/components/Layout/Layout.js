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

    const { progressState, showProgress } = useContext(ProgressContext);
    const isProgressbarActive = progressState && showProgress;
    return (
        <div
            className={styles.layout}
            style={{paddingBottom:  isProgressbarActive ? "60px" : 0}}
        >
            <Helmet title="Meqd" defer={false} />
            <Header
                setHeight={setHeight}
                {...props}
                isIphone={iosWithNotch}
                isBrowser={isBrowser}
            />
            <main style={{ marginTop: marginSize }}>{props.children}</main>
            <Footer isIphone={iosWithNotch} isBrowser={isBrowser} isProgressbarActive={isProgressbarActive}/>
            <Progressbar />
        </div>
    );
};

export default Layout;
