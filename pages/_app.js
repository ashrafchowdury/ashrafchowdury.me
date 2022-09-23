import "../styles/globals.css";
// import DataContextProvider from "../data";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//initilize the Query
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  console.log(pageProps.dehydratedState);
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
         <Component {...pageProps} />
         <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Hydrate>
       
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
