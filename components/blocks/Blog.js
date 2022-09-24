import React from "react";
import Button from "../utilities/Button";
import { urlFor } from "../../sanity";

const Blog = ({ data }) => {
  return (
    <div
      key={data._id}
      className=" w-[100%] sm:w-[85%] md:w-[320px] lg:w-[400px] mx-3 lg:mx-4 my-2 lg:my-3 py-2 overflow-hidden cursor-pointer"
    >
      <img
        src={urlFor(data.mainImage).url()}
        alt={data.title}
        title={data.title}
        className=" rounded w-[100%] md:w-[320px] lg:w-[400px] md:h-40 lg:h-40 xl:h-48 object-cover duration-700 hover:scale-105"
      />
      <p className=" text-xs lg:text-sm flex justify-between mt-2">
        <span>Web Dev</span>{" "}
        <span> {new Date(data.publishedAt).toLocaleString()}</span>
      </p>
      <h1 className=" text-xl mt-2">{data.title}</h1>
      <p className=" text-xs leading-6 h-16 overflow-hidden break-all mt-1 mb-6">
        {data.description}
      </p>
      <a href={data.link} target="_blank">
        <Button style="w-full text-sm py-2">
          Read Full Article{" "}
          <i className="fa-solid fa-arrow-right-long ml-1"></i>
        </Button>
      </a>
    </div>
  );
};

export default Blog;
