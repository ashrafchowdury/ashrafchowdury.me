import React, { Component } from "react";
import Button from "../utils/components/Button";
export class Footer extends Component {
  render() {
    return (
      <>
        {/********************************* A Linke between Exprerinace and Language ********************************/}
        <div className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] h-[3px] md:h-[4px] mx-auto my-16 md:my-20 bg-white dark:bg-[#253345]">
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
              <Button style=" py-2 px-8 text-sm md:text-[16px] xl:text-xl font-bold">
                <i className="fa-brands fa-linkedin-in mr-1"></i> Linkedin
              </Button>
            </a>
          </div>

          <p className="text-lg md:text-xxl lg:text-2xl xl:text-3xl font-blod mt-12 md:mt-16 mb-7 md:mb-9">
            If you want to know more about Follow me{" "}
            <a
              href="https://twitter.com/Ashraf_365"
              target="_blank"
              className=" underline"
            >
              #️⃣ Twitter
            </a>
          </p>
        </footer>
      </>
    );
  }
}

export default Footer;
