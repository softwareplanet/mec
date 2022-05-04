import { Link } from 'gatsby';
import React from 'react';
import * as styles from './LandingPage.module.css';
import line from './images/line.png';
import directoryPage from './images/directoryPage.png';
import equipmentPage from './images/equipmentPage.png';
import { RiGooglePlayFill, RiAppleFill } from 'react-icons/ri';

export default function LandingPage() {
    return (
        <div className={styles.LandingPage}>
            <span>?</span>
            <div className={styles.title}>
                <h1>
                    Усвідомлений, <br /> означає озброєний
                </h1>
                <img src={line} alt="line" />
                <p>
                    Каталог військової техніки на озброєнні РФ.
                    <br />
                    Короткий опис, фото та відео
                </p>
                <Link to="/home">Перейти до каталогу</Link>
                <h4>Або завантажте програму:</h4>

                <div className={styles.installMobile}>
                    <button>
                        <RiAppleFill className={styles.mobileType} />{' '}
                        <span>App Store</span>
                    </button>
                    <button>
                        <RiGooglePlayFill className={styles.mobileType} />{' '}
                        <span>Google Play</span>
                    </button>
                </div>
            </div>
            <div className={styles.mobileExample}>
                <img src={directoryPage} alt="home page" />
                <img src={equipmentPage} alt="equipment page" />
            </div>
        </div>
    );
}
