import React from "react";

const Button = ({ children, style }) => {
  return (
    <button
      className={`dark:text-white border-[3px] border-[#3792E4] rounded-full lg:py-3 lg:px-8 hover:bg-[#3792E4] hover:scale-105 duration-700 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
