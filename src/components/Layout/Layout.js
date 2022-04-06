import React, { useState } from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';
import context from './layoutContext';

const Layout = ({ children }) => {
    let [view, setView] = useState('grid');
    let [name, setName] = useState('');
    let [backPath, setBackPath] = useState(null);

    return (
        <div className={styles.layout}>
            <main>
                <Header params={{ name, backPath }} />
                <context.ViewContext.Provider value={{ view, setView }}>
                    <context.HeaderContext.Provider
                        value={{ setName, setBackPath }}
                    >
                        {children}
                    </context.HeaderContext.Provider>
                </context.ViewContext.Provider>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
