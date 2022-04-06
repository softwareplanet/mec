import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import tank from './tank.svg';
import addContent from './add-content.svg';
import * as styles from './Header.module.css';
import arrow from '../../equipment/images/arrow-left.png';
import clsx from 'clsx';

let Header = props => {

    let iPhoneVersion = () => {
        if (typeof window !== 'undefined') {
            let iHeight = window.screen.height;
            let iWidth = window.screen.width;

            if (iWidth >= 375 && iHeight >= 812) return true
        }
    }

    const [offset, setOffset] = useState(0);
    let [IOSVersion, setIOSVersion] = useState(false)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIOSVersion(typeof navigator !== 'undefined' ? /iPhone/.test(navigator.userAgent) && !window.MSStream && iPhoneVersion() : false)
    }, [])

    return (
        <div
            className={clsx(styles.container, {
                [styles.scroll]: offset > 0
            })}
        >
            <div className={clsx(styles.content, { [styles.ios]: IOSVersion })}>
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
                <a
                    href="https://forms.gle/JkwZaui4AjKtvZDe6"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={addContent} width="35px" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Header;
