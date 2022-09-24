import React from "react";
import { urlFor } from "../../sanity";

const Language = ({ data }) => {
  return (
    <div
      key={data._id}
      className=" flex items-center border border-[#3792E4] py-[8px] lg:py-[10px] px-[14px] lg:px-[16px] xl:px-[20px] m-[5px] md:m-[10px] rounded"
    >
      <img
        src={urlFor(data.mainImage).url()}
        alt="image"
        className=" w-[20px] md:w-[28px] lg:w-[40px] mr-2 lg:mr-3"
      />
      <p className=" text-sm md:text-[16px] lg:w-xl font-bold">{data.name}</p>
    </div>
  );
};

export default Language;
