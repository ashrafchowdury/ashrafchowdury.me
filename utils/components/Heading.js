import React from "react";

const Heading = ({ title, style }) => {
  return (
    <h3
      className={` text-2xl md:text-3xl lg:!text-[45px] font-bold uppercase text-center ${style}`}
    >
      {title}
    </h3>
  );
};

export default Heading;
