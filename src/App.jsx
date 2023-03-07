import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import RsearchCenter from "./components/resarchCenter";
import ConnectWith from "./components/connectWith";
import Footer from "./components/footer";

const pageItem = {
  home: "home",
  about: "about",
  services: "services",
  researchCenter: "researchcenter",
  contactUs: "contactus",
};

const App = () => {
  const [selectedPage, setSelectedPage] = useState(pageItem.home);
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(pageItem.home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home pageItem={pageItem} setSelectedPage={setSelectedPage} />
      <About pageItem={pageItem} setSelectedPage={setSelectedPage} />
      <RsearchCenter pageItem={pageItem} setSelectedPage={setSelectedPage} />
      <ConnectWith pageItem={pageItem} setSelectedPage={setSelectedPage} />
      <Footer pageItem={pageItem} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
