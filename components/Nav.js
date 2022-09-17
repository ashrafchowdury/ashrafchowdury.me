import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  //use for change the theme
  const [mood, setmood] = useState("dark");
  //use for show the mobile menu section and hide on desktop
  const [menu, setmenu] = useState("hidden");
  //use for search blogs on mobile
  const router = useRouter();

  useEffect(() => {
    //condition for see the device are under 1050px or not
    window.innerWidth >= 1050 ? setmenu("") : setmenu("hidden");

    //Handle the Theme when the page load
    const handleDark = () => {
      //check in LS theme equal to dark or not
      // and also check default media preference
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches) // check the media is dark or not
      ) {
        setmood("dark");
        //add class name on html tag
        document.querySelector("html").classList.add("dark");
      } else {
        setmood("light");
        //remove class name form html tag
        document.querySelector("html").classList.remove("dark");
      }
    };
    handleDark();
  }, [mood]);

  //handle Dark Mood
  const handleDarkTheme = () => {
    //add dark theme on localStorage
    localStorage.setItem("theme", "dark");
    setmood("dark");
  };

  //handle Light Mood
  const handleLightTheme = () => {
    //add light theme on localStorage
    localStorage.setItem("theme", "light");
    setmood("light");
  };

  return (
    <nav className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1250px] h-20 md:h-24 lg:h-28 flex items-center justify-between mx-auto">
      {/********************* Logo *****************************/}
      <Link href="/">
        <h1 className=" font-['Righteous'] text-2xl xl:text-4xl ml-2 font-bold">
          Ashraf Chowdury
        </h1>
      </Link>

      {/*********************** Links and Mobile Menu Section***************************/}
      <section
        className={`${menu} duration-700 fixed lg:relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 w-[90%] sm:w-[75%] md:w-[55%] lg:w-auto h-[90vh] lg:h-auto rounded-md bg-white dark:bg-[#253345] lg:bg-transparent dark:lg:bg-transparent flex flex-col`}
      >
        {/************************ Mobile Menu Logo | hide on desktop ***************************/}
        <div className=" w-[90%] mx-auto flex justify-between items-center mt-6">
          <h1 className=" font-['Righteous'] text-xl ml-2 font-bold lg:hidden">
            Ashraf Chowdury
          </h1>

          <span className="icon_hover py-[2px] px-[9px] lg:hidden">
            <i
              className="fa-solid fa-xmark text-2xl dark:text-white"
              onClick={() => setmenu("hidden")}
            ></i>
          </span>
        </div>

        {/************************ Links ***************************/}
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/">Projects</Link>
          <Link href="#blogs">Blogs</Link>
          <Link href="#auther">About Me</Link>
        </div>
        {/************************ Mobile Menu Signup Button | hide on desktop ***************************/}
      </section>

      <div className=" flex items-center">
        {/************************ Condition for show the theme icon ***************************/}
        {/** if theme equal to dark then show sun icon other vise show the moon icon **/}
        {mood == "dark" ? (
          <span
            title="Light Mood"
            id="themeSun"
            className="icon_hover py-[5px] px-[10px]"
            onClick={() => handleLightTheme()}
          >
            <i className="fa-regular fa-sun text-lg md:text-xl dark:text-white"></i>
          </span>
        ) : (
          <span
            title="Dark Mood"
            id="themeMoon"
            className="icon_hover py-[3px] px-[8px] lg:py-[6px] lg:px-[10px]"
            onClick={() => handleDarkTheme()}
          >
            <i className="fa-regular fa-moon text-lg md:text-xl dark:text-white"></i>
          </span>
        )}

        {/************************ Condition for show the light menu icon or dark menu icon ***************************/}
        {/** if theme equal to dark then show light menu icon other vise show the dark menu icon **/}
        {mood == "dark" ? (
          <span
            className="icon_hover py-[4px] px-[8px]"
            onClick={() => setmenu("block")}
          >
            <img
              src="/darkMenu.svg"
              className=" w-[22px] md:w-[24px] py-[5px] lg:hidden"
            />
          </span>
        ) : (
          <span
            className="icon_hover py-[4px] px-[8px]"
            onClick={() => setmenu("block")}
          >
            <img
              src="/menu.svg"
              className=" w-[22px] md:w-[24px] py-[5px] lg:hidden"
            />
          </span>
        )}
      </div>
    </nav>
  );
};

export default Nav;
