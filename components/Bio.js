import React from "react";
import Button from "./Button";
const Bio = () => {
  return (
    <>
      <section className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto mt-16 xl:mt-38 mb-6 lg:mb-32 flex flex-col lg:flex-row lg:justify-center items-center lg:items-end">
        <img
          src="/ashraf.png"
          alt="Ashraf Chowdury"
          className=" w-[100%] sm:w-[90%] md:w-[75%] lg:w-[350px] xl:w-[420px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] object-cover rounded"
        />
        <div className=" w-[100%] sm:w-[90%] md:w-[75%] lg:w-[520px] xl:w-[560px] lg:ml-7 xl:ml-9">
          <h4 className="gradiant_text text-[26px] lg:text-3xl xl:text-[36px] my-2 xl:mb-4 font-bold">
            I’m Ashraf Chowdury.
          </h4>
          <p className=" text-sm md:text-[16px] xl:text-lg leading-7 md:leading-8 lg:leading-9 xl:leading-9 break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            rerum eaque perferendis sint modi iste, aperiam perspiciatis, nihil,
            accusamus a reprehenderit deleniti neque nesciunt labore laboriosam
            nam debitis culpa exercitationem.
          </p>
          <p className=" text-lg font-bold capitalize mt-2 mb-3">
            My current stack
          </p>
          <div className="current_stack w-full flex flex-wrap">
            <span>Javascript / Node.js</span>
            <span>React.js / Next.js</span>
            <span>Redux / Context</span>
            <span>Firebase / MongoDB</span>
          </div>
          <div className=" flex flex-col mt-6">
            <Button style=" w-full py-[10px] text-sm lg:text-[16px] font-semibold">
              <a
                href="https://twitter.com/Ashraf_365"
                target="_blank"
                className=" w-[100%] py-[10px] px-2 hover:text-white dark:hover:text-gray-700 duration-500"
              >
                <i className="fa-regular fa-file mr-1"></i> Get Resume
              </a>{" "}
              /{" "}
              <a
                href="https://github.com/ashrafchowdury"
                target="_blank"
                className=" w-[100%] py-[10px] px-2 hover:text-white dark:hover:text-gray-700 duration-500"
              >
                View More
                <i className="fa-solid fa-arrow-right-long ml-2"></i>
              </a>
            </Button>

            <a href="" className=" text-sm mt-4 text-center"></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
