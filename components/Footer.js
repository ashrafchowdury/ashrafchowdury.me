import React, { Component } from "react";
import Buttons from "../utils/components/Buttons";
import { FaTwitter, FaGithub } from "react-icons/fa";

export class Footer extends Component {
  render() {
    return (
      <>
        {/********************************* A Linke between Exprerinace and Language ********************************/}
        <div className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] h-[3px] md:h-[4px] mx-auto my-16 md:my-20 bg-light dark:bg-hDark">
          {" "}
        </div>

        <footer className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto mb-6 text-center">
          <div className=" flex flex-col lg:flex-row lg:justify-center items-center text-center">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-blod mb-5 md:mb-7 lg:mb-0 lg:mr-3">
              Want me building stuff for you? Hit me on Linkedin
            </p>
            <a
              href="https://www.linkedin.com/in/ashrafchowdury/"
              target="_blank"
            >
              <Buttons style=" py-2 md:py-[10px] px-8 text-sm md:text-[16px] xl:text-xl font-bold">
                LinkedIn
              </Buttons>
            </a>
          </div>

          <p className=" md:text-xl mt-16 mb-8">Follow Me On</p>
          <div className=" flex space-x-5 items-center justify-center">
            <a
              href="https://twitter.com/Ashraf_365"
              target="_blank"
              className=" hover:scale-110 duration-300"
            >
              <FaTwitter className=" text-2xl md:text-4xl text-primary" />
            </a>
            <a
              href="https://github.com/ashrafchowdury"
              target="_blank"
              className="hover:scale-110 duration-300"
            >
              <FaGithub className=" text-2xl md:text-4xl text-dark dark:text-light" />
            </a>
            <a
              href="https://ashrafchowdury09.hashnode.dev/"
              target="_blank"
              className=" w-[30px] md:w-[40px] hover:scale-110 duration-300"
            >
              <img src="https://img.icons8.com/color/48/null/hashnode.png" />
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
