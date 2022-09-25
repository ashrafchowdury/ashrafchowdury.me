import React from "react";
import Button from "../utilities/Button";
import { urlFor } from "../../sanity";

const Bio = ({ author }) => {
  return (
    <>
      <section className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto mt-16 lg:mt-44 mb-10 lg:mb-44 flex flex-col lg:flex-row lg:justify-center items-center lg:items-center">
        {author?.map((value) => {
          return (
            <React.Fragment key={value._id}>
              <img
                src={urlFor(value.mainImage).url()}
                alt="Ashraf Chowdury"
                className=" w-[100%] sm:w-[90%] md:w-[75%] lg:w-[350px] xl:w-[420px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] object-cover rounded"
              />
              <div className=" w-[100%] sm:w-[90%] md:w-[75%] lg:w-[520px] xl:w-[620px] lg:ml-7 xl:ml-9">
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
                <p className=" text-lg font-bold capitalize mt-3 mb-3">
                  My current stack
                </p>
                <div className="current_stack w-full flex flex-wrap">
                  {value.current_stack.map((stack, ind) => {
                    return <span key={ind}>{stack.title}</span>;
                  })}
                </div>
                <div className=" flex flex-col mt-6">
                  <Button style=" w-full py-[10px] text-sm lg:text-[16px] font-semibold">
                    <a
                      href={value.resume}
                      target="_blank"
                      className=" w-[100%] py-[10px] px-2 hover:text-white dark:hover:text-gray-700 duration-500"
                    >
                      <i className="fa-regular fa-file mr-1"></i> Get Resume
                    </a>{" "}
                    /{" "}
                    <a
                      href={value.github_link}
                      target="_blank"
                      className=" w-[100%] py-[10px] px-2 hover:text-white dark:hover:text-gray-700 duration-500"
                    >
                      View More
                      <i className="fa-solid fa-arrow-right-long ml-2"></i>
                    </a>
                  </Button>
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

// //get the blog posts with server side rendering
// export const getServerSideProps = async () => {
//   //blog query
//   const authorQuery = `*[_type == "author"]{
//     _id,
//     title,
//     mainImage,
//     main_description,
//     github_link,
//     resume,
//     current_stack[] -> {
//       title,
//      },
//   }`;
//   //call api
//   const author = await sanityClient.fetch(authorQuery);

//   //send the data to home page
//   return {
//     props: {
//       author,
//     },
//   };
// };
