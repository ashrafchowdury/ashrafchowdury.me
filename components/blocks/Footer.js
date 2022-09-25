import React, { Component } from "react";
import Button from "../utilities/Button";
export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto mt-16 lg:mt-28 mb-6">
          <div className=" flex flex-col lg:flex-row lg:justify-center items-center text-center">
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-blod mb-5 md:mb-7 lg:mb-0 lg:mr-3">
              Want me building stuff for you? Hit me on Linkedin
            </p>
            <Button style=" py-2 px-6 md:px-8 text-sm md:text-[16px] xl:text-xl font-bold">
              <i className="fa-brands fa-linkedin-in mr-1"></i> Linkedin
            </Button>
          </div>

          <div className=" text-center mt-8 md:mt-10 xl:mt-16">
            <h5 className=" text-xl md:text-2xl xl:text-3xl font-bold capitalize">
              Get in touch with Me
            </h5>
            <p className=" text-sm md:text-[16px] xl:text-lg lg:leading-7 xl:leading-8 mt-2 lg:mt-4 mb-8 lg:mx-auto lg:w-[440px] xl:w-[480px]">
              Feel free to get in touch with me on
              <br /> Twitter #️⃣ or Linkedin 📨.
            </p>
            <div className="social_links">
              <a href="https://twitter.com/Ashraf_365" target="_blank">
                <i className="fa-brands fa-twitter dark:text-white"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ashraf-chowdury-297301206/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin dark:text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/_ashrafchowdury/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram dark:text-white"></i>
              </a>
              <a href="https://github.com/ashrafchowdury" target="_blank">
                <i className="fa-brands fa-github dark:text-white"></i>
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
