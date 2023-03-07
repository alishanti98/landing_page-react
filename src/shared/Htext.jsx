import React from "react";

const HText = ({ children, color }) => {
  return (
    <h2 className={`text-2xl font-bold md:text-3xl text-${color}`}>
      {children}
    </h2>
  );
};

export default HText;
