import React from "react";
// import "../reset.css";
import * as styles from "../index.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.addMargins}>
      <div style={{ maxWidth: 900 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
