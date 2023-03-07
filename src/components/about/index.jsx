import HText from "../../shared/Htext";
import { motion } from "framer-motion";
import {
  Human,
  Saudi,
  Passionate,
  Determination,
  Integrity,
  Collaboration,
  ImageBg,
  Talent,
  DNA,
  Leader,
  Time,
  Dot,
  Male,
  Famele,
  Last,
  Medal,
  First,
} from "../../assets";
import ImageLogo from "./ImageLogo";
import Title from "../../shared/Title";
import ItemValue from "./ItemValue";
import ClientTrust from "./ClientTrust";
import ImageAbsolute from "./OurCommitment";
import SearchNumber from "./SearchNumber";
import Hr from "./Hr";
import AccordionSection from "./Accordion";

const ourValues = [
  {
    title: "Passionate",
    src: Passionate,
  },
  {
    title: "Determination",
    src: Determination,
  },
  {
    title: "Integrity",
    src: Integrity,
  },
  {
    title: "Collaboration",
    src: Collaboration,
  },
];

const clientItems = [
  {
    src: DNA,
    text: `Understand Business Challenges & Organizational
    DNA, & Aspirations`,
  },
  {
    src: Leader,
    text: `Identify and select culturally fit technical
    future leaders`,
  },
  {
    src: Time,
    text: `Support the business needs by delivering talent in
    the right time`,
  },
  {
    src: Talent,
    text: `Support that continues past the talent
    placement`,
  },
];

const About = ({ setSelectedPage, pageItem }) => {
  return (
    <section id="about" className="text-white ">
      <div
        style={{ backgroundImage: `url(${ImageBg})` }}
        className="bt-42 relative bg-cover bg-left"
      >
        <motion.div
          onViewportEnter={() => setSelectedPage(pageItem.about)}
          className="sx:py-28 mx-auto w-[92%] md:w-[80%]"
        >
          <div>
            <div className="flex w-full justify-between gap-16 md:pt-32">
              <div className="mt-10 flex w-[50%] flex-col items-start md:w-[43%]">
                <HText color="primary">Introduction</HText>
                <h3 className="my-6 text-lg italic text-secondary-200 md:text-2xl">
                  “An ambitious vision for an ambitious nation”
                </h3>
                <p className="text-base md:text-xl">
                  In line with Vision 2030 plans, SearchX was founded to support
                  Human Capability Development Program Key Objective &
                  Initiatives. Nationalization programs, Empowering Saudi Future
                  Leaders & Women Enablement are key objectives that we believe
                  our local understanding & global reach helps us stand out in
                  the talent acquisition & development space.
                </p>
              </div>
              <div
                className="relative flex flex-col items-center gap-10 xs:mt-14
            md:flex-row md:items-start
            "
              >
                <div className="mt-6 md:mt-24">
                  <ImageLogo src={Human} />
                </div>

                {/* image2 */}
                <ImageLogo src={Saudi} />
              </div>
            </div>

            {/* OUR VALUES */}
            <div className="mt-14">
              <Title color="primary">Our Values</Title>
              <div className="mx-auto mt-10 flex w-full flex-wrap justify-center gap-8 md:flex-nowrap">
                {ourValues.map((item, index) => (
                  <ItemValue
                    key={index}
                    title={item.title}
                    src={item.src}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* working closely */}
          <div className="mt-24 md:mt-56">
            <div className="w-96">
              <HText color="primary">
                Working closely with our client as a “Trusted Partner” helps us
                to…
              </HText>
            </div>

            {/* clients */}
            <div className="mt-16 flex flex-wrap items-center justify-between gap-5">
              {clientItems.map((item) => (
                <ClientTrust src={item.src} text={item.text} key={item.text} />
              ))}
            </div>
          </div>

          {/* our commitment */}
          <div className="my-12 flex xs:flex-col xs:gap-56 sm:flex-row sm:gap-5 md:my-32 md:gap-0">
            <div className="xs:pb-36">
              <ImageAbsolute
                male={`${Male}`}
                dot={`${Dot}`}
                classImage1={`sm:right-10 sm:w-[100%] md:-left-40`}
                classImage2={`w-[18%] sm:-top-10 sm:-left-20 md:-top-14 md:-left-44`}
                classImage3={`w-[18%] sm:right-4 sm:top-48 md:right-32 md:top-64 `}
              />
            </div>
            {/* content */}
            <div className="h-full pt-8 md:w-[470px] md:pt-8">
              <Title color="primary">Our Commitment</Title>
              <div className="flex flex-col gap-3 pt-5">
                <p className="xs:text-lg xs:leading-normal md:text-2xl md:leading-10 ">
                  A diverse team is a better team. We are on a mission to help
                  our clients become more diverse, equitable, and inclusive.
                  Enablement of Saudi men & women is a national goal and an
                  aspiration for us.
                </p>
                <span className="mt-5 text-secondary-300 md:text-xl">
                  Additionally, we aim to lead the industry by breaking tracking
                  records of key performance metrics
                </span>
              </div>
            </div>
          </div>

          {/* search2 by the number */}
          <div className="flex h-[500px] w-full  gap-3 py-5 md:mt-60 md:flex-row md:gap-6">
            <div>
              <div className="mt-8 h-32 md:mb-12 md:h-40">
                <Title color="white">
                  Search<span className="text-primary">X</span> by the Numbers
                </Title>
              </div>
              <SearchNumber
                number="20"
                text="Countries and focusing on major emerging markets"
              />
            </div>
            <Hr height="80%" />
            <div>
              <SearchNumber
                number="85%"
                text="Success rate on executive search solutions"
              />
              <SearchNumber
                number="02"
                text="Regional presence and headquarters in Saudi Arabia and Dubai
                "
              />
            </div>
            <Hr height="80%" />
            <div>
              <SearchNumber
                number="3K+
                "
                text="Business Leaders
                believe in Ash & Maple
                "
              />
              <SearchNumber
                number="07"
                text="Global Presence in Bern,
                Zurich, Dubai, Riyadh,
                Karachi, Pune, Manila
                "
              />
            </div>
          </div>

          {/* our services */}

          <motion.div
            onViewportEnter={() => setSelectedPage(pageItem.services)}
            className=" flex xs:flex-col xs:gap-12 xs:pb-[405px] sm:flex-row sm:gap-5 md:gap-0 md:pb-32"
            id="services"
          >
            <div className="w-[100%] md:mt-40 ">
              <Title color="white">Our Services</Title>
              <div className="w-[100%]">
                <AccordionSection />
                <div className="flex h-28 w-[100%] items-center justify-between gap-3">
                  <div className="">
                    <img src={First} />
                  </div>
                  <Hr height="20px" />
                  <div>
                    <img src={Medal} />
                  </div>
                  <Hr height="20px" />
                  <div>
                    <img src={Last} />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mt-40">
              <ImageAbsolute
                male={`${Famele}`}
                dot={`${Dot}`}
                classImage1={`md:-right-11 sm:w-[100%] md:left-[152px] `}
                classImage2={`w-[18%] sm:-top-9 sm:left-6 md:-top-12 md:left-28`}
                classImage3={`w-[18%] sm:-right-40 sm:top-44 md:-right-36 md:top-80 `}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
