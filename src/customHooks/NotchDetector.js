import { useState, useEffect } from 'react';

export default function useNotchDetector(isNotch) {
    const [iosWithNotch, setIosWithNotch] = useState(isNotch);

    const isIPhoneWithNotch = () => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
            let iHeight = window.screen.height;
            let iWidth = window.screen.width;

            if (
                (iWidth >= 375 &&
                    iHeight >= 812 &&
                    /iPhone/.test(navigator.userAgent) &&
                    !window.MSStream) ||
                (navigator.platform === 'MacIntel' &&
                    navigator.maxTouchPoints > 1 &&
                    !window.MSStream)
            ) {
                return 10;
            } else if (
                iHeight < 812 &&
                /iPhone/.test(navigator.userAgent) &&
                !window.MSStream
            ) {
                return 5;
            }
        }
    };

    useEffect(() => {
        setIosWithNotch(isIPhoneWithNotch());
    }, []);

    return iosWithNotch;
}
