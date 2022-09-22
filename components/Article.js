import React from "react";
import Button from "./Button";
import { urlFor } from "../sanity";

const Article = ({ data }) => {
  return (
    <article className=" w-[90%] md-[700px] lg:w-[1000px] xl:w-[1250px] mx-auto mb-8 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center md:items-baseline">
      {data.map((value) => {
        return (
          <div
            key={value._id}
            className=" w-[100%] sm:w-[85%] md:w-[320px] lg:w-[400px] mx-3 lg:mx-4 my-2 lg:my-3 py-2 overflow-hidden cursor-pointer"
          >
            <img
              src={urlFor(value.mainImage).url()}
              alt={value.title}
              title={value.title}
              className=" rounded w-[100%] md:w-[320px] lg:w-[400px] md:h-40 lg:h-40 xl:h-48 object-cover duration-700 hover:scale-105"
            />
            <p className=" text-xs lg:text-sm flex justify-between mt-2">
              <span>Web Dev</span>{" "}
              <span> {new Date(value.publishedAt).toLocaleString()}</span>
            </p>
            <h1 className=" text-xl mt-2">{value.title}</h1>
            <p className=" text-xs leading-6 h-16 overflow-hidden break-all mt-1 mb-6">
              {value.description}
            </p>
            <a href={value.link} target="_blank">
              <Button style="w-full text-sm py-2">
                Read Full Article{" "}
                <i className="fa-solid fa-arrow-right-long ml-1"></i>
              </Button>
            </a>
          </div>
        );
      })}
    </article>
  );
};

export default Article;
