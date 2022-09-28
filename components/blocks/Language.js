import React from "react";
import { urlFor } from "../../sanity";


const Language = ({ data }) => {
  return (
    <>
      <div
        key={data._id}
        className="tooltip bg-white dark:bg-[#253345] flex items-center py-[8px] lg:py-[10px] px-[14px] lg:px-[18px] xl:px-[22px] m-[5px] md:m-[10px] rounded cursor-pointer"
      >
        <span className=" text-xs md:text-sm lg:text-[16px] font-medium text-center w-full py-[6px] md:py-2 px-3 md:px-5 rounded bg-[#3792e4] text-white">
          {data.tooltip}
        </span>
        <img
          src={urlFor(data.mainImage).url()}
          alt={data.name}
          loading="lazy"
          className=" w-[20px] md:w-[28px] lg:w-[40px] mr-2 lg:mr-3"
        />
        <p className=" text-sm md:text-[16px] lg:w-xl font-bold">{data.name}</p>
      </div>
    </>
  );
};

export default Language;
