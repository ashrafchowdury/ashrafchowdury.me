import React from "react";

const Heading = ({ title, style, icon, i_style }) => {
  return (
    <h3
      className={`text-[22px] md:text-3xl lg:text-4xl font-bold uppercase text-center mt-10 lg:mt-6 mb-7 lg:mb-20 ${style}`}
    >
      {title} <i className={`${icon} ml-2 ${i_style ?? "font-semibold"}`}></i>
    </h3>
  );
};

export default Heading;
