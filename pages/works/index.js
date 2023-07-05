import React from "react";
import Head from "next/head";
import Heading from "../../components/ui/Heading";
import Projects from "../../components/Projects";
import { useData } from "../../context/DataContext";

import { dehydrate, QueryClient } from "react-query";
import { fetchQuery } from "../../utils/functions/fetchQuery";
import { projectQuery } from "../../utils/helpers/querys";

const Works = () => {
  const { projects } = useData();
  return (
    <>
      <Head>
        <title> Building Projects </title>
      </Head>

      <Heading
        title="Recent Projects"
        style=" mt-16 lg:mt-20 mb-20 lg:mb-32"
        about="Projects I had recently worked on"
      />

      <section className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto flex flex-col items-center mb-5">
        {projects?.map((value) => {
          return (
            <React.Fragment key={value._id}>
              <Projects data={value} />
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Works;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await fetchQuery(queryClient, "project", projectQuery);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
