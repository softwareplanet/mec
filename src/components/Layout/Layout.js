import React, {useState} from 'react';
import Header from '../Header/Header';
import * as styles from './layout.module.css';
import Footer from '../Footer/Footer';
import ViewContext from '../../context/context';

const Layout = (props) => {
    let [view, setView] = useState('grid');
    let [name, setName] = useState('');
    let [backPath, setBackPath] = useState(null);

    return (
        <ViewContext.Provider value={{ view, setView, setName, setBackPath }}>
        <div className={styles.layout}>
            <main>
                <Header params={{name, backPath}} />
                {props.children}
            </main>
            <Footer />
        </div>
        </ViewContext.Provider>
    );
};

export default Layout;
