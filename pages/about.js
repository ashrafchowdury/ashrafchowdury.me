import Bio from "../components/blocks/Bio";
import Heading from "../components/utilities/Heading";
import { dehydrate, QueryClient } from "react-query";
import { authorQuery } from "../components/query/querys";
import { fetchQuery } from "../components/query/fetchQuery";
import { useQueryData } from "../components/query/useQueryData";

const about = () => {
  const { data } = useQueryData("author");
  return (
    <>
      <Heading title="About Me" style=" lg:!mt-16 lg:!mb-28" />
      <Bio author={data} />
      <section></section>
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
