import React from "react";

const Heading = ({ title, style }) => {
  return (
    <h3
      className={`text-[22px] md:text-3xl lg:text-4xl font-bold uppercase text-center mt-10 lg:mt-6 mb-10 lg:mb-20 ${style}`}
    >
      {title}
    </h3>
  );
};

export default Heading;
