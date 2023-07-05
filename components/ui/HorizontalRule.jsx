const HorizontalRule = ({ style }) => {
  return (
    <div
      className={`${style} w-[90%] mx-auto flex items-center justify-center space-x-3 my-16 sm:my-20 md:my-24 lg:my-32`}
    >
      <div className=" w-full sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-[2px]  bg-hLight dark:bg-hDark"></div>
      <div>
        <div className="w-5 md:w-7 lg:w-9 h-[2px] lg:h-[3px] bg-hLight dark:bg-hDark rotate-[45deg]"></div>
        <div className="w-5 md:w-7 lg:w-9 h-[2px] lg:h-[3px] bg-hLight dark:bg-hDark rotate-[-45deg] -mt-[2px]"></div>
      </div>
      <div className=" w-full sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-[2px]  bg-hLight dark:bg-hDark"></div>
    </div>
  );
};

export default HorizontalRule;
