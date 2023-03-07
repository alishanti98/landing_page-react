import React from "react";

const ItemValue = ({ title, src, index }) => {
  return (
    <div className="flex h-[120px] w-[45%] flex-col items-center justify-center rounded-2xl border md:h-[160px] ">
      <img src={`${src}`} className="w-10" />
      <h3 className="pt-2 text-lg">{title}</h3>
    </div>
  );
};

export default ItemValue;
