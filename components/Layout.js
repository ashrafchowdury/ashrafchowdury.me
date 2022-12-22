import React, { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import AOS from "aos";
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Nav />
      {/* <Message /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
