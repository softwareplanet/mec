import React from 'react';
import '../reset.css';
import * as styles from '../index.module.css';

const Layout = (props) => {
  return (
    <div className={styles.addMargins}>
      {props.children}
    </div>
  )
}

export default Layout;
