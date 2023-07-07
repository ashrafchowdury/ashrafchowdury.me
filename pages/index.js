import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Blog from "../components/Blog";
import Projects from "../components/Projects";
import Language from "../components/Language";
import Buttons from "../components/ui/Buttons";
import Heading from "../components/ui/Heading";
import { dehydrate, QueryClient } from "react-query";
import {
  languageQuery,
  projectQuery,
  blogQuery,
  aboutQuery,
} from "../utils/helpers/querys";
import { fetchQuery } from "../utils/functions/fetchQuery";
import { features } from "../utils/helpers/features";
import { BiFile } from "react-icons/bi";
import { useData } from "../context/DataContext";
import HorizontalRule from "../components/ui/HorizontalRule";

export default function Home() {
  const { projects } = useData();

  return (
    <main className=" overflow-hidden">
      <Head>
        <title>Ashraf Chowdury | Front-End Developer</title>
        <meta
          name="description"
          content="Hi, I'm Ashraf Chowdury and I'm a Front-End Developer. I like to build excellent Web applications using Javascript and React.js. Currently, I am focused on empowering myself by learning some new technologies that will help me to better myself in my future journey."
        />
      </Head>

      <header className=" flex flex-col-reverse lg:flex-row items-center justify-start lg:justify-between text-center lg:text-start mt-10 md:mt-24">
        <section className=" xl:w-[800px] lg:w-[550px] -mt-8 sm:-mt-12 lg:mt-0">
          <p className=" text-[16px] md:text-lg lg:text-2xl font-bold mb-2 md:mb-3 lg:mb-4">
            Creative
          </p>
          <h1 className=" capitalize text-3xl sm:text-[40px] md:text-5xl xl:text-6xl leading-[45px] sm:leading-[55px] md:leading-[65px] lg:leading-[68px] xl:leading-[80px] font-bold mb-2 sm:mb-3 md:mb-5 lg:mb-4 xl:mb-1">
            Journey of a <span className="heading ">Front-End</span> Developer,
          </h1>

          <p className="custom_text w-[95%] sm:w-[78%] lg:w-[90%] text-sm md:text-[16px] xl:text-lg leading-6 md:leading-7 lg:leading-7 xl:leading-8 mx-auto lg:mx-0">
            {"I'm"} Ashraf Chowdury, {"I've"} been learning the art of Frontend
            development by building things and contributing to open-source.
          </p>

          <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-4 mt-8 sm:mt-12 lg:mt-16 mb-16 sm:mb-20 lg:mb-28">
            <Buttons style=" !bg-primary py-2 sm:!py-3 px-4 sm:!px-5 !text-light">
              <BiFile className="mr-1 sm:mr-2 text-[16px] " />
              Get Resume
            </Buttons>

            <Buttons
              link="/contact"
              style=" !bg-transparent border border-hLight dark:border-hDark py-2 sm:!py-3 px-5 sm:!px-6"
            >
              Contact Me
            </Buttons>
          </div>

          <div className=" flex items-center justify-center lg:justify-start">
            <p className="text-xs md:text-sm lg:text-[16px] ">
              Current Stack -{" "}
            </p>
            <img
              src="https://skillicons.dev/icons?i=typescript,nextjs,tailwind,appwrite,vscode,figma&theme=light"
              alt="tech"
              className=" hidden dark:block w-24 md:w-32 ml-3"
              loading="lazy"
            />
            <img
              src="https://skillicons.dev/icons?i=typescript,nextjs,tailwind,appwrite,vscode,figma&theme=dark"
              alt="tech"
              className=" block dark:hidden w-24 md:w-32 ml-3"
              loading="lazy"
            />
          </div>
        </section>
        <img
          src="./auther.svg"
          alt="ashraf chowdury"
          className=" xl:w-[600px] lg:w-[500px] md:w-[580px] sm:w-[480px] w-full -mt-16 sm:-mt-20 md:-mt-28 lg:-mt-20 lg:-mr-5 lg:scale-110"
        />
      </header>

      <HorizontalRule />

      <section className="relative flex flex-wrap items-center justify-center mt-20 mb-24">
        <div className="gradiant lg:top-[20px] top-[0px] left-[55%] -translate-x-1/2   lg:w-[460px] w-[300px] lg:h-[460px] h-[300px] bg-[#B50121]"></div>
        <div className="gradiant lg:top-[-80px] top-[50px] left-[40%] -translate-x-1/2 lg:w-[400px] w-[250px] lg:h-[400px] h-[250px] bg-[#6016FC]"></div>
        {features.map((data) => {
          return (
            <div
              className=" xl:w-[425px] lg:w-[320px] md:w-[320px] w-[90%] bg-hLight dark:bg-hDark xl:mx-3 lg:mx-2 lg:mt-0 m-2 rounded-lg xl:p-10 lg:p-7 md:p-8 sm:p-7 p-5"
              key={data.title}
            >
              <div className=" lg:w-[50px] lg:h-[50px] sm:w-[45px] sm:h-[45px] w-10 h-10 flex items-center text-dark dark:text-white justify-center rounded-lg lg:text-2xl sm:text-xl bg-hLight dark:bg-hDark">
                <data.icon />
              </div>
              <p className=" xl:text-lg sm:text-[16px] text-sm font-semibold lg:mt-6 sm:mt-4 mt-3 lg:mb-3 md:mb-2 sm:mb-4 mb-3">
                {data.title}
              </p>
              <p className=" text-xs sm:text-sm lg:text-[16px] md:leading-6 font-light break-all leading-5 sm:leading-normal">
                {data.about}
              </p>
            </div>
          );
        })}
      </section>

      <Heading
        title="Recent Works"
        style=" mt-24 md:mt-32 lg:mt-52 mb-16 md:mb-20 lg:mb-28"
        about="Projects I had recently worked on"
      />
      <section className="flex flex-col items-center">
        {projects
          ?.filter((val) => val.project_id < 4)
          .map((value) => {
            return (
              <Fragment key={value._id}>
                <Projects data={value} />
              </Fragment>
            );
          })}
      </section>

      <HorizontalRule />

      <Heading
        title="My Ecosystem"
        style="mb-12 sm:mb-16 md:mb-20"
        about="I used these technologies to build my projects"
      />

      <section className=" lg:w-[80%] xl:w-[70%] mx-auto relative ">
        <div className="gradiant lg:top-[-100px] left-[50px] lg:w-[520px] w-[300px] lg:h-[520px] h-[300px] bg-[#fca016]"></div>
        <div className="gradiant lg:top-[250px] left-1/2 lg:w-[400px] w-[250px] lg:h-[400px] h-[250px] bg-[#16fcd2]"></div>

        <Language />
      </section>

      <HorizontalRule />

      <Heading
        title="Latest Article"
        style="mb-12 sm:mb-16 md:mb-20"
        about="Latest articles I published on Hashnode"
      />
      <article className=" flex flex-col space-y-4 items-center relative">
        <div className="gradiant lg:top-[-100px] left-[50px] lg:w-[520px] w-[300px] lg:h-[520px] h-[300px] bg-[#fca016]"></div>
        <div className="gradiant lg:top-[250px] left-1/2 lg:w-[400px] w-[250px] lg:h-[400px] h-[250px] bg-[#16fcd2]"></div>

        <Blog />
      </article>
    </main>
  );
}

export async function getServerSideProps() {
  //setup the Query Client to fetch the data in sercer side
  const queryClient = new QueryClient();

  //Requests for fetching author data for Sanity
  await fetchQuery(queryClient, "blog", blogQuery);
  await fetchQuery(queryClient, "language", languageQuery);
  await fetchQuery(queryClient, "project", projectQuery);
  await fetchQuery(queryClient, "about", aboutQuery);

  //dehydrate the setching data
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
