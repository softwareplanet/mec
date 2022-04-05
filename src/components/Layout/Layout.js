import React from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';

const Layout = props => {
    console.log(props);
    return (
        <div className={styles.layout}>
            <main>
                <Header {...props} />
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
