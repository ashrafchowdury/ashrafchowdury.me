import React from "react";

const Button = ({ children, style, click }) => {
  return (
    <button
      className={`md:text-sm lg:text-[16px] dark:text-light border-[2px] md:border-[3px] !border-primary rounded-full hover:bg-primary hover:text-light hover:scale-105 duration-700 ${style}`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
