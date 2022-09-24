import React, { useState } from "react";
import Button from "../utilities/Button";
const Message = () => {
  const [icon, seticon] = useState(false);
  //bg-[#1B2430]
  const handleEmailSubmit = () => {
    seticon(false);
  };
  return (
    <>
      {icon && (
        <section className=" w-[80%] sm:w-[80%] md:w-[470px] h-[450px] lg:h-[500px] bg-white dark:bg-[#253345] border dark:border-none rounded fixed bottom-[80px] lg:bottom-[105px] right-9 lg:right-[60px] z-20">
          <div className=" py-2">
            <p className=" uppercase font-bold ml-4">Compose Email</p>
          </div>
          <form
            onSubmit={handleEmailSubmit}
            className=" dark:text-white flex flex-col space-y-3 mx-3 my-5"
          >
            <input
              type="email"
              value="ashraf.chowdury09@gmail.com"
              className=" text-sm lg:text-[16px] py-2 lg:py-[10px] px-4 rounded-full bg-[#F4F6FF] dark:bg-[#1B2430] border dark:border-none  outline-none"
            />
            <input
              type="email"
              placeholder="From"
              className=" text-sm lg:text-[16px] py-2 lg:py-[10px] px-4 rounded-full bg-[#F4F6FF] dark:bg-[#1B2430] border dark:border-none  outline-none"
            />
            <input
              type="email"
              placeholder="Subject"
              className=" text-sm lg:text-[16px] py-2 lg:py-[10px] px-4 rounded-full bg-[#F4F6FF] dark:bg-[#1B2430] border dark:border-none  outline-none"
            />
            <textarea
              placeholder=" Write Message"
              name=""
              id=""
              className=" h-40 lg:h-[200px] text-sm lg:text-[16px] py-3 px-4 rounded-lg bg-[#F4F6FF] dark:bg-[#1B2430] border dark:border-none  outline-none"
            ></textarea>
            <Button style="py-[7px] text-sm lg:text-[16px] !mt-5">
              Submit <i className="fa-solid fa-plane ml-2"></i>
            </Button>
          </form>
        </section>
      )}

      <div
        className=" text-xl lg:text-2xl fixed bottom-5 lg:bottom-9 right-5 lg:right-9 z-20 text-white bg-[#3792E4] py-[9px] lg:py-[12px] px-[13px] lg:px-[17px] rounded-full cursor-pointer"
        onClick={() => (icon == false ? seticon(true) : seticon(false))}
      >
        {icon ? (
          <i className="fa-solid fa-xmark px-1"></i>
        ) : (
          <i className="fa-regular fa-message"></i>
        )}
      </div>
    </>
  );
};

export default Message;
