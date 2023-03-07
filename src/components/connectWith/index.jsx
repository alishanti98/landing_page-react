import { motion } from "framer-motion";
import { BgConnect } from "../../assets";
import ActionButton from "../../shared/ActionButton";

const ConnectWith = ({ setSelectedPage, pageItem }) => {
  return (
    <motion.section
      className="onViewportEnter={() => setSelectedPage(pageItem.contactus)} 
    relative h-[40vh] w-full
    "
    >
      <div className="absolute z-10 h-full w-full bg-primary/50">
        <div className="absolute z-20 flex w-full flex-col items-center justify-center py-20">
          <h3 className="mb-6 text-xl text-white" id="contactus">
            CONNECT WITH US
          </h3>
          <ActionButton pageItem={pageItem} setSelectedPage={setSelectedPage}>
            Get in Touch
          </ActionButton>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${BgConnect})` }}
        className="relative h-full w-full bg-cover md:bg-left-top "
      ></div>
    </motion.section>
  );
};

export default ConnectWith;
