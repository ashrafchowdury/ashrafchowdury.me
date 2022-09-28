import React from "react";
import Button from "../utilities/Button";
import { urlFor } from "../../sanity";

const Blog = ({ data }) => {
  return (
    <div
      key={data._id}
      className="rounded w-[100%] sm:w-[85%] md:w-[320px] lg:w-[400px] mx-3 lg:mx-4 my-2 lg:my-3 overflow-hidden cursor-pointer bg-white dark:bg-[#253345]"
    >
      <img
        src={urlFor(data.mainImage).url()}
        alt={data.title}
        title={data.title}
        loading="lazy"
        className=" rounded-t w-[100%] md:h-40 lg:h-40 xl:h-48 object-cover duration-700 hover:scale-105"
      />
      <div className=" w-[90%] mx-auto">
        <p className=" text-xs flex justify-between mt-3">
          <span className=" font-bold">Web Dev</span>{" "}
          <span> {new Date(data.publishedAt).toLocaleString()}</span>
        </p>
        <h1 className="font-medium lg:h-16 text-lg md:text-xl lg:text-2xl mt-3 break-all overflow-hidden">
          {data.title}
        </h1>

        <a
          href={data.link}
          target="_blank"
          className=" mb-5 block mt-6 md:mt-7"
        >
          <Button style="w-full text-sm py-[5px] md:py-2">
            Read Full Article{" "}
            <i className="fa-solid fa-arrow-right-long ml-1"></i>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Blog;
