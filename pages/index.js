import React, { useEffect } from "react";
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
  experianceQuery,
} from "../components/query/querys";
import { fetchQuery } from "../components/query/fetchQuery";
import { useQueryData } from "../components/query/useQueryData";
//sanity
import { urlFor } from "../sanity";
//
import Link from "next/link";
import Language from "../components/blocks/Language";
import Experiance from "../components/blocks/Experiance";
import Head from "next/head";
import { data } from "autoprefixer";
// import AOS from "aos";
// import 'aos/dist/aos.css';

export default function Home() {
  const { data: project } = useQueryData("project");
  const { data: author } = useQueryData("author");
  const { data: blog } = useQueryData("blog");
  const { data: language } = useQueryData("language");
  const { data: experiance } = useQueryData("experiance");

  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);

  return (
    <>
      <Head>
        <title>Ashraf Chowdury Portfolio | Front-End Developer</title>
        <meta
          name="description"
          content="Hi, My name is Ashraf Chowdury and I am a Front-End Developer. I like to build excellent Web applications using Javascript and React.js. Currently, I am focused on empowering myself by learning some new technologies that will help me to better myself in my future journey."
        />
      </Head>
      {/********* Header Section ************/}

      <header className="header_animate w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto text-center mt-8 xl:mt-14 lg:mb-24">
        <p
          data-aos="fade-down"
          className=" text-sm sm:text-[16px] md:text-lg lg:text-xl uppercase font-bold mb-6 md:mb-7 lg:mb-10"
        >
          HI, MY NAME IS
        </p>
        <h1
          data-aos="fade-down"
          className="gradiant_text text-[34px] sm:text-[40px] md:text-5xl lg:text-[72px] xl:text-[90px] leading-[45px] xl:leading-[110px] font-bold mb-2 sm:mb-3 md:mb-5 lg:mb-4 xl:mb-1"
        >
          Ashraf Chowdury. <br />
        </h1>
        <h2
          data-aos="fade-down"
          className="gradiant_text capitalize text-[32px] sm:text-[38px] md:text-[42px] lg:text-[68px] xl:text-[80px] leading-[45px] lg:leading-[88px] xl:leading-[110px] font-bold mb-3 md:mb-5"
        >
          I am a front-end developer.
        </h2>

        <p
          data-aos="fade-down"
          className="custom_text text-xs md:text-[16px] lg:text-lg md:w-11/12 lg:w-5/6 xl:w-[950px] md:mx-auto leading-7 md:leading-8 lg:leading-10 mb-7 md:mb-9 lg:mb-12"
        >
          I like to build 🏗️ excellent Web applications using Javascript and
          React.js. Currently, I am focused on empowering myself by learning
          some new technologies 👨‍💻 that will help me to better myself in my
          future journey.
        </p>

        <a
          href="mailto:ashraf.chowdury@gmail.com"
          target="_blank"
          data-aos="fade-up"
        >
          <Button style="py-[10px] px-6 lg:py-3 lg:px-8 text-sm lg:text-lg text-semibold">
            <i className="fa-solid fa-code-fork lg:mr-1"></i> Do You Want To
            Work With Me?
          </Button>
        </a>

        <div className="w-6 h-10 lg:w-7 lg:h-12 rounded-full border-[3px] border-[#67c2f6] dark:border-white mx-auto mt-8 lg:mt-12 pt-2 lg:pt-4 cursor-pointer overflow-hidden">
          <div className="dot_animation w-2 h-2 rounded-full bg-[#67c2f6] dark:bg-white m-auto"></div>
        </div>
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
      <Heading title="My Coding Project ⚒️" style="mt-12" />
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
      <Heading title="My Ecosystem ♋" />
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
        <a href="mailto:ashraf.chowdury@gmail.com" target="_blank">
          <Button style=" text-sm md:text-[16px] py-[7px] px-8 md:py-[10px] md:px-10 block mx-auto mt-[40px] md:mt-[60px]">
            Contact Me
          </Button>
        </a>
      </section>

      {/********************************* A Linke between Exprerinace and Language ********************************/}
      <div className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] h-[3px] md:h-[4px] mx-auto my-16 md:my-20 lg:my-28 bg-white dark:bg-[#253345]">
        {" "}
      </div>

      {/********************************* Experiance Section ********************************/}
      <Experiance data={experiance} />

      <Heading title=" My Latest Article 🛰️" />
      <article
        className=" w-[90%] md-[700px] lg:w-[1020px] xl:w-[1250px] mx-auto mb-8 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center md:items-baseline"
      >
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
  //Requests for fetching project data for Sanity
  await fetchQuery(queryClient, "experiance", experianceQuery);

  //dehydrate the setching data
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
