import React from "react";

const Buttons = ({ children, style, click }) => {
  return (
    <button
      className={` text-sm lg:text-[16px] text-dark dark:text-light border-[3px] border-primary rounded-lg hover:bg-primary bg-transparent hover:text-light hover:scale-105 duration-700 flex items-center justify-center mx-auto ${style}`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Buttons;
