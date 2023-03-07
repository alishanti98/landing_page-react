const SearchNumber = ({ number, text }) => {
  return (
    <div className="flex w-[100%] flex-col justify-center">
      <div className="w-[80%] py-6">
        <div className="text-3xl text-primary md:text-7xl">{number}</div>
        <div
          style={{
            width: "80%",
            background: "#FFFFFF",
            height: "0.07px",
          }}
          className="my-2 md:my-8"
        ></div>
        <h4 className="md:text-xl">{text}</h4>
      </div>
    </div>
  );
};

export default SearchNumber;
