import { useState, useEffect } from 'react';

export default function useNotchDetector(startValue) {
    const [iosWithNotch, setIosWithNotch] = useState(startValue);

    const isIPhoneWithNotch = () => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
            let iHeight = window.screen.height;
            let iWidth = window.screen.width;

            if (
                iWidth >= 375 &&
                iHeight >= 812 &&
                /iPhone/.test(navigator.userAgent) &&
                !window.MSStream
            ) {
                return true;
            }
        }
    };

    useEffect(() => {
        setIosWithNotch(isIPhoneWithNotch());
    }, []);

    return iosWithNotch;
}
