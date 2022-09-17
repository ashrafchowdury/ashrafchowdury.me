import React, { useState } from "react";

const Tooltip = ({ children, direc, text }) => {
  const [tooltip, settooltip] = useState("");
  return (
    <div className=" relative inline-block">
      {children}
      <span className=" hidden bg-black text-white text-center rounded py-1 px-2 absolute z-10 top-[-5px] right-[110%] after:content after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-5 after:border-transparent">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
