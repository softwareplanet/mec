import { Link } from 'gatsby';
import React from 'react';
import logo from './logo.svg';
import * as styles from './LandingPage.module.css';
import directoryPage from './images/directoryPage.png';
import equipmentPage from './images/equipmentPage.png';
import { RiGooglePlayFill, RiAppleFill } from 'react-icons/ri';

export default function LandingPage() {
    return (
        <div className={styles.LandingPage}>
            <header>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" height="36px" />
                    <span>Військова техніка</span>
                </div>
                <span className={styles.help}>?</span>
            </header>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>
                        Усвідомлений, <br /> означає озброєний
                    </h1>
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
            <footer>Software Group Planet Ltd.</footer>
        </div>
    );
}
