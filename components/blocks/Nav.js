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
    <nav className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1250px] h-28 md:h-32 lg:h-36 flex items-center justify-between mx-auto">
      {/********************* Logo *****************************/}
      <Link href="/">
        <h1 className=" font-['Sacramento'] text-[26px] md:text-[36px] lg:text-5xl ml-2 font-bold cursor-pointer">
          Ashraf Chowdury
        </h1>
      </Link>

      {/************************ Links fo desktop ***************************/}
      <div className=" flex items-center">
        <section className=" flex items-center">
          <Links style="desktop_links hidden lg:block" />

          {/************************ Condition for show the theme icon ***************************/}
          {/** if theme equal to dark then show sun icon other vise show the moon icon **/}
          {mood == "dark" ? (
            <span
              title="Light Mood"
              id="themeSun"
              className="icon_hover lg:ml-4 py-[5px] px-[10px]"
              onClick={() => handleLightTheme()}
            >
              <i className="fa-regular fa-sun text-lg md:text-xl dark:text-white"></i>
            </span>
          ) : (
            <span
              title="Dark Mood"
              id="themeMoon"
              className="icon_hover lg:ml-4 py-[3px] px-[8px] lg:py-[6px] lg:px-[10px]"
              onClick={() => handleDarkTheme()}
            >
              <i className="fa-regular fa-moon text-lg md:text-xl dark:text-white"></i>
            </span>
          )}
        </section>

        {/************************ Condition for show the light menu icon or dark menu icon ***************************/}
        {/** if theme equal to dark then show light menu icon other vise show the dark menu icon **/}

        <span
          className="icon_hover py-[4px] px-[10px] text-xl ml-2 md:ml-4 lg:hidden dark:text-white"
          onClick={() => setmenu("block")}
        >
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>

      {/*********************** Mobile Menu Section***************************/}
      <section
        className={`${menu} duration-700 fixed lg:hidden left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-30 w-[90%] sm:w-[85%] md:w-[70%] h-[90vh] md:h-[80vh] rounded-md bg-white dark:bg-[#253345] flex flex-col`}
      >
        <div className=" w-[80%] mx-auto flex justify-between items-center mt-10">
          <h1 className=" font-['Sacramento'] text-xl font-bold lg:hidden">
            Ashraf Chowdury
          </h1>
          <span className="icon_hover py-[2px] px-[9px] lg:hidden">
            <i
              className="fa-solid fa-xmark text-2xl dark:text-white"
              onClick={() => setmenu("hidden")}
            ></i>
          </span>
        </div>

        <Links style="mobile_links w-[80%] mx-auto flex flex-col space-y-10 mt-10 dark:text-white" />
      </section>
    </nav>
  );
};

export default Nav;

export const Links = ({ style }) => {
  return (
    <div className={style}>
      <Link href="/">🏚️ Home</Link>
      <Link href="/projects">⚒️ Projects</Link>
      <a href="https://ashrafchowdury09.hashnode.dev/" target="_blank">
        🛰️ Blogs
      </a>
      <Link href="/about">🧑 About Me</Link>
    </div>
  );
};
