import React from "react";
import Nav from "../components/Nav";
import Button from "../components/Button";
import Article from "../components/Article";
import Message from "../components/Message";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Tooltip from "../components/Tooltip";
import ReactTooltip from "react-tooltip";
//sanity
import { sanityClient, urlFor } from "../sanity";

export default function Home({ language, blog, author, project }) {
  console.log(project);

  return (
    <>
      <Nav />
      {/********* Header Section ************/}
      <Message />

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

      <Bio author={author} />

      <Heading
        title="My Coding Project"
        icon="fa-solid fa-screwdriver-wrench"
        style="mt-12"
      />

      <section className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto flex flex-col items-center mb-5">
        {project?.map((value) => {
          return (
            <React.Fragment key={value._id}>
              <Projects data={value} />
            </React.Fragment>
          );
        })}
      </section>

      <Heading title="My Ecosystem" icon="fa-solid fa-network-wired" />

      <section>
        <div className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1150px] mx-auto flex flex-wrap justify-center">
          {language?.map((value) => {
            return (
              <div className=" flex items-center border border-[#3792E4] py-[8px] lg:py-[10px] px-[14px] lg:px-[16px] xl:px-[20px] m-[5px] md:m-[10px] rounded">
                <img
                  src={urlFor(value.mainImage).url()}
                  alt="image"
                  className=" w-[20px] md:w-[28px] lg:w-[32px] mr-2 lg:mr-3"
                />
                <p className=" text-sm md:text-[16px] lg:w-lg font-bold">
                  {value.name}
                </p>
              </div>
            );
          })}
        </div>
        <Button style=" text-sm md:text-[16px] py-[7px] px-8 md:py-[10px] md:px-10 block mx-auto mt-[40px] md:mt-[60px]">
          Contact Me
        </Button>
      </section>

      <div className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] h-[3px] md:h-[4px] mx-auto my-16 md:my-20 lg:my-28 bg-white dark:bg-[#253345]">
        {" "}
      </div>

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

      <Article data={blog} />

      <Footer />
    </>
  );
}

//get the blog posts with server side rendering
export const getServerSideProps = async () => {
  const authorQuery = `*[_type == "author"]{
    _id,
    title,
    mainImage,
    main_description,
    github_link,
    resume,
    current_stack[] -> {
      title,
     },
  }`;
  //blog query
  const blogQuery = `*[_type == "blog"]{
    _id,
    title,
    link,
    mainImage,
    publishedAt,
    description,
  }`;

  const languageQuery = `*[_type == "language"]{
    name,
    tooltip,
    mainImage,
  }`;

  const projectQuery = `*[_type == "project"]{
    _id,
    title,
    mainImage,
    publishedAt,
    slug,
    description_1,
    description_2,
    github_link,
    website,
    categories[] -> {
      title,
     },
  }`;
  //call api
  const language = await sanityClient.fetch(languageQuery);
  const blog = await sanityClient.fetch(blogQuery);
  const author = await sanityClient.fetch(authorQuery);
  const project = await sanityClient.fetch(projectQuery);
  //send the data to home page
  return {
    props: {
      language,
      blog,
      author,
      project,
    },
  };
};
