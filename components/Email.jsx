import React from "react";
import Link from "next/link";

const Email = () => {
  return (
    <div className=" hidden md:flex fixed bottom-32 lg:bottom-36 md:-right-28 lg:-right-24 xl:-right-16 z-30 rotate-90  items-center space-x-3">
      <Link href="mailto:ashraf.chowdury09@gmail.com" target="_blank">
        <p className="text-[10px] md:text-xs cursor-pointer">
          {" "}
          ashraf.chowdury09@gmail.com
        </p>
      </Link>
      <div className="w-10 lg:w-16 h-[2px] bg-hLight dark:bg-hDark rounded-sm "></div>
    </div>
  );
};

export default Email;
