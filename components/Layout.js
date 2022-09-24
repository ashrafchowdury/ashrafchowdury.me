import Nav from "./blocks/Nav";
import Footer from "./blocks/Footer";
import Message from "./blocks/Message";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Message />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
