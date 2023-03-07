import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ActionButton = ({ children, setSelectedPage, pageItem }) => {
  return (
    <AnchorLink
      className="md:70 flex items-center justify-between rounded-3xl border-2 bg-transparent px-7 py-2 text-white hover:border-transparent 
      hover:bg-primary
      md:text-lg 
      "
      onClick={() => setSelectedPage(pageItem.contactUs)}
      href={`#${pageItem.contactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
