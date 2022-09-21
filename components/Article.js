import React, { useState, useEffect } from "react";
import Button from "./Button";

const Article = () => {
  const data = [0, 12123, 41212];

  return (
    <article className=" w-[90%] md-[700px] lg:w-[1000px] xl:w-[1250px] mx-auto mb-8 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center md:items-baseline">
      {data.map((value) => {
        return (
          <div className=" w-[100%] sm:w-[85%] md:w-[320px] lg:w-[400px] mx-3 lg:mx-4 my-2 lg:my-3 py-2 overflow-hidden cursor-pointer">
            <img
              src="https://coursework.vschool.io/content/images/2017/08/react.png"
              alt="{title}"
              title="{title}"
              className=" rounded w-[100%] md:w-[320px] lg:w-[400px] md:h-40 lg:h-44 object-cover duration-700 hover:scale-105"
            />
            <p className=" text-xs lg:text-sm flex justify-between mt-2">
              <span>React.js</span> <span>Publihed: 9/12/2022</span>
            </p>
            <h1 className=" text-xl mt-2">
              Handl React Form With Formik {value}
            </h1>
            <p className=" text-xs leading-6 h-16 overflow-hidden break-all mt-1 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              culpa nemo vel aperiam eos quas magnam, libero, ex possimus
              repellat, nulla illo eum dignissimos
            </p>
            <Button style="w-full text-sm py-2">
              Read Full Article{" "}
              <i className="fa-solid fa-arrow-right-long ml-1"></i>
            </Button>
          </div>
        );
      })}
    </article>
  );
};

export default Article;
