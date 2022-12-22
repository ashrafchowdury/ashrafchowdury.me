import "../styles/globals.css";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//initilize the Query
import Layout from "../components/Layout";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
            {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
          </Layout>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
