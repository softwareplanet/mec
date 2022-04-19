import { useState, useEffect } from 'react';

export default function useCheckBrowser(isBrowser) {
    const [browser, setBrowser] = useState(isBrowser);

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

    return browser;
}
