import Link from "next/link";
import Buttons from "./ui/Buttons";
import { urlFor } from "../sanity";
import { BiGitPullRequest, BiLinkExternal } from "react-icons/bi";

const Projects = ({ data }) => {
  return (
    <>
      <div
        className={`mb-16 md:mb-24 lg:mb-32 xl:mb-36 w-[95%] sm:w-[90%] md:w-[75%] lg:w-full lg:flex lg:items-center lg:justify-center ${
          data.direction && "flex-row-reverse"
        }`}
      >
        <Link href={`/works/${data.slug.current}`}>
          <div className=" border border-hLight dark:border-hDark rounded-xl p-2 overflow-hidden">
            <img
              src={urlFor(data.mainImage).url()}
              alt={data.title}
              title={`This ${data.title} Bulding By Ashraf Chowdury`}
              loading="lazy"
              className=" w-[100%] lg:w-[400px] xl:w-[420px] h-[220px] sm:h-[300px] md:h-[310px] lg:h-[280px] xl:h-[300px] object-cover rounded-lg cursor-pointer hover:scale-105 duration-300"
            />
          </div>
        </Link>

        <div
          className={`w-[100%] lg:w-[55%]  ${
            data.direction ? "" : " lg:ml-6 xl:ml-8"
          }`}
        >
          <h4 className=" dark:text-light md:text-2xl lg:text-3xl xl:text-[32px] lg:mb-5 mb-2 mt-3 lg:mt-0 font-medium">
            {data.title}
          </h4>
          <p className="lg:w-[90%] xl:w-[85%] text-xs md:text-sm lg:text-[16px] leading-6 md:leading-7 break-all h-10 md:h-[50px] lg:h-[90px] xl:h-auto overflow-hidden xl:overflow-visible">
            {data.description}
          </p>

          <div className="current_stack w-full md:h-8 overflow-hidden flex flex-wrap items-center md:mt-4 mt-5">
            <p className="text-xs md:text-sm lg:text-[16px] mr-2">
              {" "}
              Build With -
            </p>
            {data.categories.map((stack, ind) => {
              return <span key={ind}>{stack.title}</span>;
            })}
          </div>

          <div className=" flex flex-row items-center mt-8 xl:mt-12">
            <a href={data.github_link} target="_blank" rel="noreferrer">
              <Buttons style=" !py-2 !px-4 lg:!px-5 !text-xs md:!text-sm ">
                <BiGitPullRequest className=" mr-1 text-sm md:text-[16px] lg:text-lg" />{" "}
                View Repo
              </Buttons>
            </a>
            <a
              href={data.website}
              target="_blank"
              className="text-xs md:text-sm text-center ml-4 cursor-pointer flex items-center"
              rel="noreferrer"
            >
              <BiLinkExternal className="mr-1 text-sm md:text-[16px] lg:text-lg" />
              View Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
