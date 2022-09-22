import "../styles/globals.css";
// import DataContextProvider from "../data";


function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <>
      <Component {...pageProps}   />
    </>
  );
}

export default MyApp;

