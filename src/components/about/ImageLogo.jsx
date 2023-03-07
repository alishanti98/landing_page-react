import React from "react";

const ImageLogo = ({ src }) => {
  return (
    <div
      style={{ borderWidth: "0.1px" }}
      className="flex items-center justify-center rounded-2xl py-12 px-7 md:px-9 md:py-16"
    >
      <img src={src} alt="" className="w-28 md:w-40" />
    </div>
  );
};

export default ImageLogo;
