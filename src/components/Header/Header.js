import { Link } from 'gatsby';
import React, { useEffect, useState, createRef } from 'react';
import tank from './tank.svg';
import * as styles from './Header.module.css';
import arrow from '../../equipment/images/arrow-left.png';
import { fromEvent, debounceTime } from 'rxjs';
import clsx from 'clsx';

let Header = props => {
    const [offset, setOffset] = useState(false);
    let [iosWithNotch, setIosWithNotch] = useState(false)

    let isIPhoneWithNotch = () => {
        if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
            let iHeight = window.screen.height;
            let iWidth = window.screen.width;

            if (iWidth >= 375 && iHeight >= 812 && /iPhone/.test(navigator.userAgent) && !window.MSStream) return true
        }
    }

    useEffect(() => {
        setIosWithNotch(isIPhoneWithNotch())
    }, [])

    const refComponent = createRef();

    useEffect(() => {
        props.setHeight(refComponent.current.getBoundingClientRect().height)
        const subscribtion = fromEvent(window, 'resize')
            .pipe(
                debounceTime(100),
            )
            .subscribe(() => props.setHeight(refComponent.current.getBoundingClientRect().height));
        return () => subscribtion.unsubscribe();
    }, [refComponent]);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset != 0);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={clsx(styles.container, {
                [styles.scroll]: offset
            })}
            ref={refComponent}
        >
            <div className={clsx(styles.content, { [styles.ios]: iosWithNotch })}>
                <Link to={props.backPath || '/'}>
                    <div className={styles.head}>
                        {props.backPath ? (
                            <img height="24px" src={arrow} />
                        ) : (
                            <img src={tank} alt="" className={styles.logo} />
                        )}
                        <h1>{props.name}</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
