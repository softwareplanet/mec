import React from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import * as headerStyles from '../Header/Header.module.css';
import Footer from '../Footer/Footer';

const Layout = props => {
    return (
        <div className={styles.layout}>
            <Header {...props} />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
