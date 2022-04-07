import React from "react";
import Header from "../Header/Header";
import * as styles from "./layout.module.css";
import Footer from '../Footer/Footer';
import { Progressbar } from "../Progressbar/Progressbar";

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <main>
        <Header {...props} />
        {props.children}
      </main>
      <Footer />
      <Progressbar />
    </div>
  );
};

export default Layout;
