import React from "react";
import Link from "next/link";
import Button from "../utilities/Button";
import { urlFor } from "../../sanity";

const Projects = ({ data }) => {
  return (
    <>
      <div
        className={`mb-10 md:mb-12 lg:mb-32 xl:mb-36 sm:w-[90%] md:w-[75%] lg:w-[90%] lg:flex lg:items-center lg:justify-center ${
          data.direction && "flex-row-reverse"
        }`}
      >
        <Link href={`/projects/${data.slug.current}`}>
          <div data-aos="fade-left">
            <img
              src={urlFor(data.mainImage).url()}
              alt={data.title}
              title={`This ${data.title} Bulding By Ashraf Chowdury`}
              loading="lazy"
              className=" w-[100%] lg:w-[400px] xl:w-[420px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[310px] xl:h-[330px] object-cover rounded cursor-pointer hover:scale-110 duration-500"
            />
          </div>
        </Link>

        <div
          data-aos="fade-right"
          className={`w-[100%] xl:w-[55%]  ${
            data.direction ? "lg:mr-5 xl:mr-7" : " lg:ml-6 xl:ml-8"
          }`}
        >
          <h4 className=" dark:text-white text-xl lg:text-3xl xl:text-[36px] my-2 xl:mb-3 font-bold">
            {data.title}
          </h4>
          <p className=" text-sm md:text-[16px] xl:text-lg leading-7 md:leading-8 lg:leading-8 xl:leading-9 break-all h-[92px] xl:h-auto overflow-hidden xl:overflow-visible ">
            {data.description_1}
          </p>
          <p className=" text-[14px] lg:text-[16px] xl:text-lg font-bold capitalize mt-1 lg:mt-3 mb-2 lg:mb-4">
            Build With:
          </p>
          <div className="current_stack w-full flex flex-wrap">
            {data.categories.map((stack, ind) => {
              return <span key={ind}>{stack.title}</span>;
            })}
          </div>
          <div className=" flex flex-row items-center mt-8 xl:mt-12">
            <a href={data.gihub_link} target="_blank">
              <Button style=" py-[9px] px-6 xl:px-8 text-sm lg:text-[16px] font-bold">
                <i className="fa-solid fa-code-compare mr-1"></i> View GitHub
              </Button>
            </a>
            <a
              href={data.website}
              target="_blank"
              className=" text-sm lg:text-[16px] text-center ml-4 "
            >
              <i className="fa-solid fa-up-right-from-square mr-1"></i>
              View Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
