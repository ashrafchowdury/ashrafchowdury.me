import React from "react";

const Button = ({ children, style, click }) => {
  return (
    <button
      className={`dark:text-white border-[2px] md:border-[3px] border-[#3792E4] rounded-full hover:bg-[#3792E4] hover:text-white hover:scale-105 duration-700 ${style}`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
