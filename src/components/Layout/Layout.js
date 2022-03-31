import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, commitInfo, tagInfo }) => {
  return (
    <>
      <Header name="Військова техніка" />
      {children}
      <Footer commit={commitInfo} tag={tagInfo} />
    </>
  )
}

export default Layout;
