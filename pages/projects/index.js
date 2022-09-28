import React, { useEffect, useState } from "react";
import Head from "next/head";
import Heading from "../../components/utilities/Heading";
import Projects from "../../components/blocks/Projects";
import { dehydrate, QueryClient } from "react-query";
import { projectQuery } from "../../components/query/querys";
import { fetchQuery } from "../../components/query/fetchQuery";
import { useQueryData } from "../../components/query/useQueryData";

const projects = () => {
  const { data } = useQueryData("project");

  return (
    <>
      <Head>
        <title> Building Projects </title>
      </Head>
      <Heading title="My Coding Project ⚒️" style=" lg:!mt-16 lg:!mb-28" />

      <section className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto flex flex-col items-center mb-5">
        {data?.sort().map((value) => {
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

export default projects;

//get the project data with server side rendering
export async function getServerSideProps() {
  //setup the Query Client to fetch the data in sercer side
  const queryClient = new QueryClient();
  //Requests for fetching project data for Sanity
  await fetchQuery(queryClient, "project", projectQuery);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
