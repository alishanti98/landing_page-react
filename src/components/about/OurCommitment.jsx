const ImageAbsolute = ({
  classImage2,
  classImage3,
  classImage1,
  male,
  dot,
}) => {
  return (
    <div className="pb-50">
      <div className="relative sm:w-[440px] md:w-[650px]">
        <img src={male} className={`absolute z-10 ${classImage1}`} />
        <img src={dot} className={`absolute ${classImage2}`} />
        <img src={dot} className={`absolute ${classImage3}`} />
      </div>
    </div>
  );
};

export default ImageAbsolute;
