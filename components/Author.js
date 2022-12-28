import React from "react";
import Buttons from "../utils/components/Buttons";
import { urlFor } from "../sanity";
import { Toaster, toast } from "react-hot-toast";
import { BiFile, BiGitPullRequest } from "react-icons/bi";

const Bio = ({ author }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section
        className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto flex flex-col lg:flex-row lg:justify-center items-center lg:items-center"
        data-aos="zoom-in-up"
      >
        {author?.map((value) => {
          return (
            <React.Fragment key={value._id}>
              <img
                src={urlFor(value.mainImage).url()}
                alt="Ashraf Chowdury"
                title="Ashraf Chowdury"
                className="shadow-lg w-[90%] sm:w-[80%] md:w-[75%] lg:w-[350px] xl:w-[420px] md:h-[420px] xl:h-[480px] object-cover rounded-lg"
                loading="lazy"
              />
              <div className=" w-[100%] sm:w-[90%] md:w-[75%] lg:w-[520px] xl:w-[620px] text-center md:text-start lg:ml-7 xl:ml-9">
                <h4 className="gradiant_text text-[26px] lg:text-3xl xl:text-[36px] my-2 xl:mb-4 font-bold">
                  {value.title}
                </h4>
                <p className=" text-sm md:text-[16px]  leading-7 md:leading-8 lg:leading-9 break-all">
                  {value.main_description}
                </p>
                {value?.sub_description && (
                  <p className=" text-sm md:text-[16px] leading-7 md:leading-8 lg:leading-9 break-all mt-2 md:mt-3">
                    {value?.sub_description}
                  </p>
                )}
                <p className=" text-lg font-bold capitalize mt-5 md:mt-3 mb-3">
                  My current stack
                </p>
                <div className="current_stack w-full flex flex-wrap justify-center md:justify-start">
                  {value.current_stack.map((stack, ind) => {
                    return (
                      <span key={ind} className=" !bg-hLight dark:!bg-hDark">
                        {stack.title}
                      </span>
                    );
                  })}
                </div>
                <div className=" flex flex-col mt-6">
                  <Buttons style=" w-full py-[5px] lg:py-[6px] text-sm lg:text-[16px] font-semibold">
                    <a
                      href={value.resume}
                      onClick={() =>
                        !value.resume &&
                        toast.error("Resume is not ready right now")
                      }
                      target="_blank"
                      className=" py-[10px] px-2 hover:text-light dark:hover:text-gray-700 duration-500 flex items-center"
                    >
                      <BiFile className=" mr-1 text-lg md:text-xl" />
                      Get Resume
                    </a>{" "}
                    /{" "}
                    <a
                      href={value.github_link}
                      target="_blank"
                      className=" py-[10px] px-2 hover:text-light dark:hover:text-gray-700 duration-500 flex items-center"
                    >
                      <BiGitPullRequest className=" mr-1 text-lg md:text-xl" />
                      View My Repo
                    </a>
                  </Buttons>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Bio;
