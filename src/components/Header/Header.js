import React, { useEffect, useState, createRef } from 'react';
import logo from './logo.svg';
import * as styles from './Header.module.css';
import arrow from '../../equipment/images/arrow-left.png';
import { fromEvent, debounceTime } from 'rxjs';
import clsx from 'clsx';
import ScrollUp from '../../customHooks/ScrollUp';
import { navigate } from 'gatsby';

let Header = props => {
    const [offset, setOffset] = useState(false);

    const refElement = createRef();

    useEffect(() => {
        props.setHeight(refElement.current.getBoundingClientRect().height);
        const subscribtion = fromEvent(window, 'resize')
            .pipe(debounceTime(100))
            .subscribe(() =>
                props.setHeight(
                    refElement.current.getBoundingClientRect().height
                )
            );
        return () => subscribtion.unsubscribe();
    }, [refElement]);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset !== 0);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const iosWithNotch = props.isIphone === 10;
    const iosWithoutNotch = props.isIphone === 5;

    return (
        <div
            className={clsx(styles.container, {
                [styles.scroll]: offset,
            })}
            ref={refElement}
        >
            <div
                className={clsx(
                    styles.content,
                    { [styles.iosX]: iosWithNotch },
                    { [styles.iosSe]: iosWithoutNotch },
                    { [styles.browser]: props.isBrowser }
                )}
            >
                {props.backPath ? (
                    <div
                        className={styles.head}
                        onClick={() => navigate(props.backPath)}
                    >
                        <img
                            height="24px"
                            src={arrow}
                            alt="arrow"
                            className={styles.arrow}
                        />
                        <h1>{props.name}</h1>
                    </div>
                ) : (
                    <div
                        className={styles.head}
                        onClick={() => ScrollUp('smooth')}
                    >
                        <img src={logo} alt="logo" className={styles.logo} />
                        <h1>{props.name}</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
