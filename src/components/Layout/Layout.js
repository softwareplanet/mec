import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';

const Layout = props => {
    const [height, setHeight] = useState(30);
    const [iosWithNotch, setIosWithNotch] = useState(false);
    const [isBrowser, setBrowser] = useState(false);
    let marginSize = height - 20;

    const isIPhoneWithNotch = () => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
            let iHeight = window.screen.height;
            let iWidth = window.screen.width;

            if (
                iWidth >= 375 &&
                iHeight >= 812 &&
                /iPhone/.test(navigator.userAgent) &&
                !window.MSStream
            )
                return true;
        }
    };

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

    useEffect(() => {
        setIosWithNotch(isIPhoneWithNotch());
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
