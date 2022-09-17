import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <>
        {/********* Footer Section ************/}
        <footer className=" w-[90%] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto mb-4">
          <div className="text-center mb-12 md:flex md:items-center md:justify-center">
            <h3 className=" text-xl lg:text-2xl xl:text-3xl leading-8 font-bold md:mr-4">
              Want me building stuff for you? Hit me on Linkedin
            </h3>
            <button className="gradiant_btn py-2 lg:py-3 px-4 lg:px-5 xl:px-6 text-sm lg:text-[16px] font-bold text-white rounded mt-5 md:mt-0">
              My Linkedin
            </button>
          </div>
          {/********* Social Media Icons ************/}
        </footer>
      </>
    );
  }
}

export default Footer;
