import React from "react";

const ClientTrust = ({ src, text }) => {
  return (
    <div className="sm:w-[45%]">
      <div className="flex items-center gap-5">
        <img src={src} className="w-16 md:w-20" />
        <p className=" md:text-6 text-lg md:leading-8">{text}</p>
      </div>
    </div>
  );
};

export default ClientTrust;
