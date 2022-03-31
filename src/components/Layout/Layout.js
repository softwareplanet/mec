import React from 'react';
import '../reset.css';
import * as styles from '../index.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.addMargins}>
      {children}
    </div>
  )
}

export default Layout;
