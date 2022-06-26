import React from "react";

import "./FixedCenter.scss";

const FixedCenter = ({ children }) => {
  return (
    <div className="fixed-center">
      <div className="fixed-center-inner">{children}</div>
    </div>
  );
};

export default FixedCenter;
