import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeDataProvider from "../context/ThemeContext";
import DataProvider from "../context/DataContext";
import Email from "./Email";
import StickyNavbar from "./StickyNavbar";

const Layout = ({ children }) => {
  return (
    <DataProvider>
      <img
        src="linesDark.svg"
        className="w-full hidden dark:block absolute -z-30 left-0 top-0 right-0"
      />
      <img
        src="linesLight.svg"
        className="w-full block dark:hidden absolute -z-30 left-0 top-0 right-0"
      />
      <div className="bgDark hidden dark:block fixed -z-40 top-0 left-0 right-0 bottom-0"></div>
      <div className="bgLight block dark:hidden fixed -z-40 top-0 left-0 right-0 bottom-0"></div>
  

      <main className="xl:w-[1350px] lg:w-[1020px] md:w-[750px] sm:w-[550px] w-[95%] mx-auto relative overflow-hidden">
        <Email />
        <ThemeDataProvider>
          <Navbar />
          <StickyNavbar />
          {children}
          <Footer />
        </ThemeDataProvider>
      </main>
    </DataProvider>
  );
};

export default Layout;
