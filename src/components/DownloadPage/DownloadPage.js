import React from 'react';
import * as styles from './DownloadPage.module.css';
import logo from './tank.svg';
import directoryPage from './images/directoryPage.png';
import equipmentPage from './images/equipmentPage.png';
import { RiGooglePlayFill, RiAppleFill } from 'react-icons/ri';
import { Link } from 'gatsby';

export default function DownloadPage() {
    return (
        <div className={styles.LandingPage}>
            <div className={styles.header}>
                <Link to="/" className={styles.logo}>
                    <img src={logo} alt="logo" height="35px" />
                    <h1>Військова техніка</h1>
                </Link>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>
                        Усвідомлений, <br />
                        означає озброєний
                    </h1>
                    <p>
                        Каталог військової техніки на озброєнні РФ.
                        <br />
                        Короткий опис, фото та відео
                    </p>
                    <h4>Завантажити програму:</h4>

                    <div className={styles.installMobile}>
                        <a
                            href="https://testflight.apple.com/join/XbdAyoMB"
                            target="_blank"
                        >
                            <RiAppleFill className={styles.mobileType} />
                            <span>App Store</span>
                        </a>
                        <a
                            href="https://github.com/softwareplanet/mec/releases/latest"
                            target="_blank"
                        >
                            <RiGooglePlayFill className={styles.mobileType} />
                            <span>Google Play</span>
                        </a>
                    </div>

                    <div className={styles.gitHubLink}>
                        Відкрити за допомогою{' '}
                        <a
                            href="https://github.com/softwareplanet/mec"
                            target="_blank"
                        >
                            GitHub
                        </a>
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
