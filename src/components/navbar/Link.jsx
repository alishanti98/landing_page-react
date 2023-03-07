import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      onClick={() => setSelectedPage(lowerCasePage)}
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage
          ? "font-bold before:absolute before:left-[2px] before:bottom-[-10px] before:h-[3px] before:w-[95%] before:bg-primary "
          : ""
      }
      relative cursor-pointer text-lg text-white md:w-auto
      `}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
