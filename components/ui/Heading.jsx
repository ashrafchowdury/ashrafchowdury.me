const Heading = ({ title, style, about }) => {
  return (
    <div className={`${style} text-center`}>
      <h3 className=" bg-darkHeading dark:bg-lightHeading text-transparent bg-clip-text text-xl sm:text-2xl lg:text-[32px] font-bold uppercase">
        {title}
      </h3>
      <p className=" lg:text-lg sm:text-[16px] text-sm mt-4 md:mt-6 font-light">
        {about}
      </p>
    </div>
  );
};

export default Heading;
