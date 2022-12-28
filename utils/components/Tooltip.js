import React, { useState } from "react";

const Tooltip = ({ children }) => {
  const [tooltip, settooltip] = useState("");
  return (
    <div className="tooltip">
      {children}
      <span></span>
    </div>
  );
};

export default Tooltip;
