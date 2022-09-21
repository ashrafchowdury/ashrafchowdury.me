import React, { useState, useEffect } from "react";
import Button from "./Button";

const Article = () => {
  const data = [1, 3, 4];

  return (
    <article className=" w-[90%] md-[700px] lg:w-[1000px] xl:w-[1250px] mx-auto flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center">
      {data.map((value) => {
        return (
          <div className=" w-[300px] lg:w-[350px] h-[420px] lg:h-[450px] px-5 py-5 rounded bg-white dark:bg-[#253345] mx-3 my-4 md:my-3">
            <img
              src="https://coursework.vschool.io/content/images/2017/08/react.png"
              alt="image"
              className=" rounded-md"
            />
            <div className=" text-xs dark:text-white flex justify-between items-center mt-2 mb-2">
              <span>React.js</span> <span>Publihed: 9/12/2022</span>
            </div>
            <h1 className=" text-xl">Handle React Forms With Formik</h1>
            <p className=" text-xs leading-6 h-16 overflow-hidden break-all mt-2 mb-7">
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
