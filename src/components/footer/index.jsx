import { Logo } from "../../assets";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { headingTitleFooter } from "./data";

const Footer = () => {
  return (
    <footer className=" relative h-[70vh]  w-full overflow-hidden pt-24">
      <div className="bottom-0 mx-auto w-[92%] text-white md:w-[80%]">
        <div className="flex flex-wrap gap-5 md:justify-between">
          <div className="">
            <img alt="logo" src={Logo} className="w-36" />
          </div>

          <div className="xm:gap-x-28  flex flex-wrap justify-center gap-16 gap-y-6 md:gap-24">
            {headingTitleFooter.map((content) => (
              <div className="md:h-[300px]">
                <div className="mb-6">
                  <h3 className="mb-2 text-base md:text-2xl">
                    {content.title}
                  </h3>
                  <div className="h-[2px] w-[15px] bg-primary md:w-[25px]"></div>
                </div>
                <div className="flex flex-col">
                  {content.item.map((ele) => (
                    <span className="flex items-center text-sm text-secondary-200 md:text-xl">
                      <BsArrowRightShort />
                      {ele.element}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* icons footer */}

        <div className="relative my-10 flex  w-full  items-center text-secondary-300">
          <div className="flex cursor-pointer gap-1 md:gap-2 md:text-2xl">
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiOutlineTwitter />
            <BsFacebook />
          </div>
          <div className="flex w-full justify-center text-white md:text-2xl">
            <h4>SearchX Your HR Services partner by OceanX</h4>
          </div>
        </div>
      </div>
      <div className="xm:invisible absolute h-[0.07px] w-[100vw] bg-white sm:invisible md:visible md:top-[414px]"></div>
    </footer>
  );
};

export default Footer;
