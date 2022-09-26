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
          <span className=" px-3 py-1 rounded bg-sky-300">Web Dev</span>{" "}
          <span> {new Date(data.publishedAt).toLocaleString()}</span>
        </p>
        <h1 className="text-lg md:text-xl mt-3">{data.title}</h1>
        <p className=" text-xs lg:text-sm leading-6 lg:leading-7 h-16 md:h-20 overflow-hidden  break-all mt-1 lg:mt-2 mb-6">
          {data.description}
        </p>
        <a href={data.link} target="_blank" className=" mb-5 block">
          <Button style="w-full text-sm py-2">
            Read Full Article{" "}
            <i className="fa-solid fa-arrow-right-long ml-1"></i>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Blog;
