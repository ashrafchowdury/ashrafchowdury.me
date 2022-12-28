import React, { useEffect, useState } from "react";
import { urlFor } from "../sanity";

const Language = ({ data }) => {
  const [sortData, setsortData] = useState([]);
  useEffect(() => {
    //store the project datas Id
    let data_id = [];
    //find id & store in data_id
    const find_id = data.map((val) => data_id.push(val.id));
    //sort data_id
    const sort_data_id = data_id.sort((a, b) => a - b);

    //sort the actual data by the help of sort_data_id
    const order_rize_data = sort_data_id.map((id) =>
      data.find((value) => value.id == id)
    );
    setsortData(order_rize_data);
  }, []);
  return (
    <>
      {sortData.map((value) => {
        return (
          <div
            key={value._id}
            className="tooltip bg-hLight dark:bg-hDark flex items-center py-[8px] lg:py-[12px] pl-[14px] pr-[20px] m-[7px] md:m-[12px] rounded-xl cursor-pointer"
            data-aos="zoom-in"
          >
            <span className=" text-xs md:text-sm lg:text-[16px] font-medium text-center w-full py-[6px] md:py-2 px-3 md:px-5 rounded bg-primary text-light">
              {value.tooltip}
            </span>
            <img
              src={urlFor(value.mainImage).url()}
              alt={value.name}
              loading="lazy"
              className=" w-[20px] md:w-[28px] lg:w-[40px] mr-2 lg:mr-4"
            />
            <p className=" text-sm md:text-[16px] lg:text-xl font-bold">
              {value.name}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Language;
