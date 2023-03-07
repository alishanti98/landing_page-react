import { motion } from "framer-motion";
import React, { useState } from "react";
import { Big, Small2, Small3 } from "../../assets";
import { BsArrowRightShort } from "react-icons/bs";

const sliderImage = [
  {
    src: Big,
    id: 0,
    isOpen: true,
    title1: "Industries We Cover",
    tittle2: "Investments",
    icon: BsArrowRightShort,
  },
  {
    src: Small2,
    id: 2,
    isOpen: false,
    title1: "Industries We Cover",
    tittle2: "Real Estate",
    icon: BsArrowRightShort,
  },
  {
    src: Small3,
    id: 3,
    isOpen: false,
    title1: "Industries We Cover",
    tittle2: "Real Estate",
    icon: BsArrowRightShort,
  },
];
const RsearchCenter = ({ pageItem, setSelectedPage }) => {
  const [image, setImage] = useState(sliderImage);

  const handleClickOpen = (id) => {
    console.log(id);
    let newArr = image.map((item) => {
      if (item.id === id) {
        item.isOpen = true;
      } else {
        item.isOpen = false;
      }
      return item;
    });
    setImage(newArr);
  };
  console.log(sliderImage);

  return (
    <section className=" overflow-hidden">
      <motion.div
        onViewportEnter={() => setSelectedPage(pageItem.researchCenter)}
        className="h-[100vh] "
      >
        <div className="flex h-[80%] w-full " id="researchcenter">
          {image.map((item) => {
            return (
              <div
                className={`w-[${
                  item.isOpen ? "80%" : "10%"
                }] relative h-[100vh] cursor-pointer `}
                onClick={() => handleClickOpen(item.id)}
                key={item.id}
              >
                <img
                  src={item.src}
                  className="absolute h-[100%] w-[100%] object-fill"
                />
                <div className="absolute bottom-20 z-10 w-[80%] text-white">
                  {/* image title open */}
                  {item.isOpen && (
                    <div className="ml-9 flex w-[100%]  flex-col items-start justify-start md:ml-40">
                      <h4 className="text-2xl md:text-3xl">
                        {" "}
                        Industries We Cover
                      </h4>
                      <h2 className="my-6 flex w-[100%] items-center justify-between text-2xl md:w-[100%] md:text-4xl ">
                        Investments{" "}
                        <BsArrowRightShort className="text-3xl md:text-4xl" />
                      </h2>
                      <div className=" h-[3px] w-[33%] bg-white"></div>
                    </div>
                  )}

                  {/* image title close */}
                  <div>
                    {!item.isOpen && (
                      <h2 className="my-8 ml-5 -rotate-90 sm:text-2xl md:text-4xl">
                        Investments
                      </h2>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default RsearchCenter;
