import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiSun, BiMenuAltRight } from "react-icons/bi";
import { FaRegMoon, FaTimes } from "react-icons/fa";

const Nav = () => {
  //use for change the theme
  const [mood, setmood] = useState("dark");
  //use for show the mobile menu section and hide on desktop
  const [menu, setmenu] = useState("hidden");

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
          <Links style="desktop_links hidden lg:block" setmenu={setmenu} />

          {/************************ Condition for show the theme icon ***************************/}
          {/** if theme equal to dark then show sun icon other vise show the moon icon **/}
          {mood == "dark" ? (
            <button
              id="themeSun"
              className="lg:ml-4 py-[8px] px-[8px] focus:ring-2 ring-primary hover:bg-hDark duration-500 rounded-lg"
              onClick={() => handleLightTheme()}
            >
              <BiSun className=" text-xl md:text-2xl dark:text-light" />
            </button>
          ) : (
            <button
              id="themeMoon"
              className="lg:ml-4 py-[8px] px-[8px] focus:ring-2 ring-primary hover:bg-hLight dark:hover:bg-hDark duration-500 rounded-lg"
              onClick={() => handleDarkTheme()}
            >
              <FaRegMoon className=" text-xl lg:text-2xl dark:text-light" />
            </button>
          )}
        </section>

        {/************ Mobile Me nu Icon ***********/}
        <button
          className=" ml-3 py-[6px] px-[6px] focus:ring-2 ring-primary hover:bg-hLight dark:hover:bg-hDark duration-500 rounded-lg lg:hidden"
          onClick={() => setmenu("block")}
        >
          <BiMenuAltRight className=" text-[26px] text-dark dark:text-light" />
        </button>
      </div>

      {/*********************** Mobile Menu Section***************************/}
      <section
        className={`${menu} duration-700 fixed lg:hidden left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-30 w-[90%] sm:w-[85%] md:w-[70%] h-[90vh] md:h-[80vh] rounded-md bg-light dark:bg-hDark flex flex-col`}
      >
        <div className=" w-[80%] mx-auto flex justify-between items-center mt-10">
          <h1 className=" font-['Sacramento'] text-xl md:text-2xl font-bold lg:hidden">
            Ashraf Chowdury
          </h1>

          <button
            className="lg:ml-4 py-[8px] px-[8px] focus:ring-2 ring-primary hover:bg-hLight dark:hover:bg-dark duration-500 rounded-lg"
            onClick={() => setmenu("hidden")}
          >
            <FaTimes className=" text-xl lg:text-2xl dark:text-light" />
          </button>
        </div>

        <Links
          style="mobile_links w-[80%] mx-auto flex flex-col space-y-10 mt-10 dark:text-light"
          setmenu={setmenu}
        />
      </section>
    </nav>
  );
};

export default Nav;

//Links on Navbar
export const Links = ({ style, setmenu }) => {
  const handleMenu = () => {
    window.innerWidth >= 1050 ? setmenu("") : setmenu("hidden");
  };
  return (
    <div className={`${style}`}>
      <Link href="/">
        <span onClick={handleMenu}>🏚️ Home</span>
      </Link>
      <Link href="/projects">
        <span onClick={handleMenu}> ⚒️ Projects</span>
      </Link>
      <a href="https://ashrafchowdury09.hashnode.dev/" target="_blank">
        <span onClick={handleMenu}>🛰️ Blogs</span>
      </a>
      <Link href="/about">
        <span onClick={handleMenu}>🧑 About Me</span>
      </Link>
    </div>
  );
};
