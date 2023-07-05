import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import { aboutQuery } from "../utils/helpers/querys";
import { fetchQuery } from "../utils/functions/fetchQuery";
import { useData } from "../context/DataContext";
import ContentStructure from "../components/ContentStructure";

const About = () => {
  const { about } = useData();

  return (
    <>
      <Head>
        <title> About Ashraf Chowdury </title>
      </Head>
      <div className=" w-[90%] sm:w-[90%] lg:w-[50%] mt-12 md:mt-16 mb-20 md:mb-24 lg:mb-32">
        <h1 className=" bg-darkHeading dark:bg-lightHeading text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
          About Myself
        </h1>
        <p className=" lg:text-xl md:text-lg sm:text-[16px] text-sm mt-4 md:mt-6 font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          eum molestiae nisi autem, dolorum doloribus.
        </p>
      </div>

      <ContentStructure content={about[0].about} />
    </>
  );
};

export default About;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await fetchQuery(queryClient, "about", aboutQuery);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
