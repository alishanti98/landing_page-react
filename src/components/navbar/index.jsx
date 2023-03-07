import { Logo } from "../../assets";
import Link from "./Link";
import { useMediaPredicate } from "react-media-hook";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const flexBetween = "flex items-center justify-between";

let links = ["Home", "About", "Services", "Research Center", "Contact Us"];

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
  const isAboveMediumScreens = useMediaPredicate("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(true);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-500 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBackground}${flexBetween} fixed top-0 z-30 w-full  py-8`}
      >
        <div className={`${flexBetween} mx-auto w-[92%] md:w-[80%]`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE => LOGO*/}
            <div className="w-32 md:w-36">
              <img alt="logo" src={Logo} />
            </div>
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} gap-16 `}>
                <Link
                  page={"Home"}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page={"About"}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page={"Services"}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page={"Research Center"}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page={"Contact Us"}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {!isAboveMediumScreens && !isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-500 drop-shadow-xl ">
          {/* LOSE ICON */}

          {/* MENU LINKS */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <ul className="ml-[33%] flex flex-col gap-14 text-lg">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    page={link}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
