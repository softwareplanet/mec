import React from "react";
import Header from "../Header/Header";
// import "../reset.css";
import * as styles from "../index.module.css";

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <main>
        <Header {...[props]} />
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
