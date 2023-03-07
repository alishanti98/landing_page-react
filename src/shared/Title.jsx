import HText from "./Htext";

const Title = ({ children, color }) => {
  return (
    <div className="flex flex-col">
      <HText color={color}>{children}</HText>
      <div className="left-1 mt-3 ml-[1px] h-1 w-[52px] bg-primary"></div>
    </div>
  );
};

export default Title;
