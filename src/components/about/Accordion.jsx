import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { BsArrowDown } from "react-icons/bs";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <div
          className={`ml-auto transition-transform duration-200 ease-in-out ${
            isEnter && "text-primary"
          }`}
        >
          <BsArrowDown className="md:text-2xl" />
        </div>
      </>
    )}
    className=""
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-5 pl-0 text-left md:text-3xl border-b ${
          isEnter && "text-primary"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200  ease-in-out bg-transparent ",
    }}
    panelProps={{ className: "p-4 pl-0 md:text-2xl" }}
  />
);

const AccordionSection = () => {
  return (
    <div className="mx-2 my-7 ">
      <Accordion transition transitionTimeout={200}>
        <AccordionItem header="Executive Search" initialEntered>
          We help you identify your culturally fit, business savvy, exceptional
          talent
        </AccordionItem>

        <AccordionItem header="Board Services">
          Lorem ipsum dolor sit amet consectetur.
        </AccordionItem>

        <AccordionItem header="Leadership Services">
          Lorem ipsum dolor sit amet consectetur.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
