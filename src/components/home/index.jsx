import { useState } from "react";
import { motion } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";
import image1 from "../../assets/bg_hero.png";
import ActionButton from "../../shared/ActionButton";
import { BsArrowRight } from "react-icons/bs";

function Home({ pageItem, setSelectedPage }) {
  const [selectedImage, setSelectImage] = useState(0);
  const slides = [
    {
      image: image1,
    },
    {
      image: image1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setSelectImage(slideIndex);
  };

  return (
    <section id="home" className="relative h-[100vh] w-full ">
      {/* BACKGROUND IMAGE TO SLIDER */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="relative h-full w-full bg-cover bg-center md:bg-left-top "
      >
        <div className="mx-auto flex h-full w-[92%] flex-col items-start justify-center text-white  md:w-[80%]">
          <p className="my-8 text-xl md:text-2xl">
            “My first goal is to make our country a<br /> successful and
            pioneering model in the
            <br /> world at all levels; and I will work with
            <br /> you to achieve this”
          </p>
          <ActionButton pageItem={pageItem} setSelectedPage={setSelectedPage}>
            Read More <BsArrowRight className="ml-2 " />
          </ActionButton>
        </div>
        {/* HOME */}
        <motion.div onViewportEnter={() => setSelectedPage(pageItem.home)}>
          {/* ICON */}
          <div className="absolute bottom-0 right-[38%] flex  flex-row md:right-36 md:top-[45%] md:flex-col">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className=" flex  cursor-pointer items-center justify-center text-3xl md:text-4xl"
              >
                <RxDotFilled
                  className={`${
                    selectedImage !== slideIndex
                      ? "text-4xl text-primary md:text-5xl"
                      : "text-secondary-500"
                  } `}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
