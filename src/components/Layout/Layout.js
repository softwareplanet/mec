import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';
import useNotchDetector from '../../customHooks/NotchDetector';

const Layout = props => {
    const [height, setHeight] = useState(30);
    const [isBrowser, setBrowser] = useState(false);
    const iosWithNotch = useNotchDetector(false);
    let marginSize = height - 30;

    const checkBrowser = () => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
            const userAgent = navigator.userAgent;

            if (userAgent.match(/chrome|chromium|crios/i)) {
                return true;
            } else if (userAgent.match(/safari/i)) {
                return true;
            } else if (userAgent.match(/edg/i)) {
                return true;
            } else if (userAgent.match(/firefox|fxios/i)) {
                return true;
            }
        }
    };

    useEffect(() => {
        setBrowser(checkBrowser());
    }, []);

    return (
        <div className={styles.layout}>
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
