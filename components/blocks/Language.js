import React from "react";
import { urlFor } from "../../sanity";

const Language = ({ data }) => {
  return (
    <div
      key={data._id}
      className="bg-white dark:bg-[#253345] flex items-center py-[8px] lg:py-[10px] px-[14px] lg:px-[18px] xl:px-[22px] m-[5px] md:m-[10px] rounded hover:scale-110 duration-700 cursor-pointer"
    >
      <img
        src={urlFor(data.mainImage).url()}
        alt={data.name}
        title={data.name}
        loading="lazy"
        className=" w-[20px] md:w-[28px] lg:w-[40px] mr-2 lg:mr-3"
      />
      <p className=" text-sm md:text-[16px] lg:w-xl font-bold">{data.name}</p>
    </div>
  );
};

export default Language;
