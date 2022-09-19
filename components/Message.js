import React, { useState } from "react";
import Button from "./Button";
const Message = () => {
  const [icon, seticon] = useState(false);
  //bg-[#1B2430]
  const handleEmailSubmit = () => {
    seticon(false);
  };
  return (
    <>
      {icon && (
        <section className=" w-[80%] h-[400px] dark:bg-[#253345] rounded fixed bottom-[70px] right-8 z-20">
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
              className=" text-sm py-2 px-4 rounded-full bg-[#1B2430]  outline-none"
            />
            <input
              type="email"
              placeholder="From"
              className=" text-sm py-2 px-4 rounded-full bg-[#1B2430]  outline-none"
            />
            <textarea
              placeholder=" Write Message"
              name=""
              id=""
              className=" h-40 text-sm py-3 px-4 rounded-lg bg-[#1B2430]  outline-none"
            ></textarea>
            <Button style="py-[7px] text-sm !mt-5">
              Submit <i className="fa-solid fa-plane ml-2"></i>
            </Button>
          </form>
        </section>
      )}

      <div
        className=" text-xl fixed bottom-5 right-5 z-20 text-white bg-[#3792E4] py-[9px] px-[13px] rounded-full"
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
