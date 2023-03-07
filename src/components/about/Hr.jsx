const Hr = ({ height }) => {
  return (
    <div className="flex w-[10%] items-center justify-center">
      <span className={`h-[${height}] w-[0.07px] rotate-180 bg-white`}></span>
    </div>
  );
};

export default Hr;
