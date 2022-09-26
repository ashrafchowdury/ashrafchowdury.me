import Head from "next/head";
import Bio from "../components/blocks/Bio";
import Heading from "../components/utilities/Heading";
import Experiance from "../components/blocks/Experiance";
import { dehydrate, QueryClient } from "react-query";
import { authorQuery } from "../components/query/querys";
import { fetchQuery } from "../components/query/fetchQuery";
import { useQueryData } from "../components/query/useQueryData";

const about = () => {
  const { data } = useQueryData("author");
  return (
    <>
      <Head>
        <title> About Ashraf Chowdury </title>
      </Head>
      <Heading title="About Me 🧑" style=" lg:!mt-16" />
      <Bio author={data} />
      <Experiance />
    </>
  );
};

export default about;

//get the author data with server side rendering
export async function getServerSideProps() {
  //setup the Query Client to fetch the data in sercer side
  const queryClient = new QueryClient();
  //Requests for fetching author data for Sanity
  await fetchQuery(queryClient, "author", authorQuery);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
