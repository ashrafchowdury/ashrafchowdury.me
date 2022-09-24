import React from "react";
//
import Blog from "../components/blocks/Blog";
import Bio from "../components/blocks/Bio";
import Projects from "../components/blocks/Projects";
//
import Button from "../components/utilities/Button";
import Heading from "../components/utilities/Heading";
import Tooltip from "../components/utilities/Tooltip";
//
import { dehydrate, QueryClient } from "react-query";
import {
  authorQuery,
  blogQuery,
  languageQuery,
  projectQuery,
} from "../components/query/querys";
import { fetchQuery } from "../components/query/fetchQuery";
import { useQueryData } from "../components/query/useQueryData";
//sanity
import { urlFor } from "../sanity";
//
import Link from "next/link";
import Language from "../components/blocks/Language";

export default function Home() {
  const { data: project } = useQueryData("project");
  const { data: author } = useQueryData("author");
  const { data: blog } = useQueryData("blog");
  const { data: language } = useQueryData("language");

  return (
    <>
      {/********* Header Section ************/}

      <header className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto text-center mt-10 xl:mt-14">
        <p className=" text-sm sm:text-[16px] md:text-lg lg:text-xl uppercase font-bold mb-6 md:mb-7 lg:mb-10">
          HI, MY NAME IS
        </p>
        <h1 className="gradiant_text text-[34px] sm:text-[40px] md:text-5xl lg:text-[72px] xl:text-[90px] leading-[45px] xl:leading-[110px] font-bold mb-2 sm:mb-3 md:mb-5 lg:mb-4 xl:mb-1">
          Ashraf Chowdury. <br />
        </h1>
        <h2 className="gradiant_text capitalize text-[32px] sm:text-[38px] md:text-[42px] lg:text-[68px] xl:text-[80px] leading-[45px] lg:leading-[88px] xl:leading-[110px] font-bold mb-3 md:mb-5">
          I am a front-end developer.
        </h2>

        <p className=" text-xs md:text-[16px] lg:text-lg md:w-11/12 lg:w-5/6 xl:w-[950px] md:mx-auto leading-7 md:leading-8 lg:leading-10 mb-7 md:mb-9 lg:mb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          nemo expedita illo? Eveniet ipsum repudiandae doloribus unde enim
          quod, voluptatum sapiente beatae, repudiandae doloribus unde enim
        </p>

        <Button style="py-[10px] px-6 lg:py-3 lg:px-8 text-sm lg:text-lg text-semibold">
          <i className="fa-solid fa-code-fork lg:mr-1"></i> Do You Want To Work
          With Me?
        </Button>
      </header>

      <article className="w-full h-48 md:h-[250px] lg:h-[300px] my-10 bg-white dark:bg-[#253345] flex justify-center items-center">
        <p className=" md:text-xl lg:text-2xl lg:leading-[45px] font-light text-center capitalize">
          <span className=" text-xl md:text-2xl lg:text-3xl">“</span>
          <span className="text-xl md:text-2xl lg:text-3xl font-medium">S</span>
          uccess isn’t always about greatness. It’s about consistency. <br />{" "}
          Consistent hard work leads to success. Greatness will come
          <span className="text-xl md:text-2xl lg:text-3xl">”</span>
        </p>
      </article>

      {/**************************** Author Bio Section **********************************/}
      <Bio author={author} />

      {/********************************* Project  Section ********************************/}
      <Heading
        title="My Coding Project"
        icon="fa-solid fa-screwdriver-wrench"
        style="mt-12"
      />
      <section className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto flex flex-col items-center mb-5">
        {project
          ?.filter((val) => val.project_id < 4)
          .map((value) => {
            return (
              <React.Fragment key={value._id}>
                <Projects data={value} />
              </React.Fragment>
            );
          })}
      </section>

      {/********************************* Language  Section ********************************/}
      <Heading title="My Ecosystem" icon="fa-solid fa-network-wired" />
      <section>
        <div className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto flex flex-wrap justify-center">
          {language?.map((value) => {
            return (
              <React.Fragment key={value._id}>
                <Language data={value} />
              </React.Fragment>
            );
          })}
        </div>
        <Button style=" text-sm md:text-[16px] py-[7px] px-8 md:py-[10px] md:px-10 block mx-auto mt-[40px] md:mt-[60px]">
          Contact Me
        </Button>
      </section>

      {/********************************* A Linke between Exprerinace and Language ********************************/}
      <div className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] h-[3px] md:h-[4px] mx-auto my-16 md:my-20 lg:my-28 bg-white dark:bg-[#253345]">
        {" "}
      </div>

      {/********************************* Experiance Section ********************************/}
      <Heading
        title="Expreriance"
        icon="fa-regular fa-address-book"
        i_style="font-normal"
      />
      <section className=" w-full mb-20 lg:mb-28">
        <div className=" w-[90%] md:w-[550px] lg:w-[750px] text-center mx-auto my-12 md:my-20 lg:my-24">
          <h4 className=" text-[22px] md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-5">
            Starting
          </h4>
          <p className=" text-sm md:text-[16px] lg:text-lg leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            nostrum est asperiores quasi error, necessitatibus dolorum,
            voluptatem nisi unde quia ipsam quidem commodi dicta eaque dolor
            maxime facilis
          </p>
        </div>
        <div className=" w-[90%] md:w-[550px] lg:w-[750px] text-center mx-auto my-12 md:my-20 lg:my-24">
          <h4 className=" text-[22px] md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-5">
            Right Now
          </h4>
          <p className=" text-sm md:text-[16px] lg:text-lg leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            nostrum est asperiores quasi error, necessitatibus dolorum,
            voluptatem nisi unde quia ipsam quidem
          </p>
        </div>
      </section>

      <Heading
        title=" My Latest Article"
        icon="fa-solid fa-newspaper"
        i_style="font-normal"
      />
      <article className=" w-[90%] md-[700px] lg:w-[1000px] xl:w-[1250px] mx-auto mb-8 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center md:items-baseline">
        {blog?.map((value) => {
          return (
            <React.Fragment key={value._id}>
              <Blog data={value} />
            </React.Fragment>
          );
        })}
      </article>
    </>
  );
}

//get the blog posts with server side rendering
export async function getServerSideProps() {
  //setup the Query Client to fetch the data in sercer side
  const queryClient = new QueryClient();

  //Requests for fetching author data for Sanity
  await fetchQuery(queryClient, "author", authorQuery);
  //Requests for fetching blog data for Sanity
  await fetchQuery(queryClient, "blog", blogQuery);
  //Requests for fetching language data for Sanity
  await fetchQuery(queryClient, "language", languageQuery);
  //Requests for fetching project data for Sanity
  await fetchQuery(queryClient, "project", projectQuery);

  //dehydrate the setching data
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
