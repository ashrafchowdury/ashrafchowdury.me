import React from "react";
import Heading from "../utilities/Heading";

const Experiance = () => {
  return (
    <>
      <Heading
        title="Expreriance"
        icon="fa-regular fa-address-book"
        i_style="font-normal"
      />
      <section className=" w-full mb-20 lg:mb-28">
        <div className=" w-[90%] md:w-[550px] lg:w-[750px] text-center mx-auto my-12 md:my-20 lg:my-24">
          <h4 className=" text-[22px] md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-5">
            Starting
          </h4>
          <p className=" text-sm md:text-[16px] lg:text-lg leading-6">
            I started my first journey in 2021 with HTML and CSS and learned how
            to build websites using basic HTML, CSS, and Bootstrap. In
            late-2021, I started learning about front-end frameworks such as
            ReactJS.
          </p>
        </div>
        <div className=" w-[90%] md:w-[550px] lg:w-[750px] text-center mx-auto my-12 md:my-20 lg:my-24">
          <h4 className=" text-[22px] md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-5">
            Right Now
          </h4>
          <p className=" text-sm md:text-[16px] lg:text-lg leading-6">
            Right now, I'm working with ReactJS and Redux, trying to learn all I
            can think about them. I'm also starting to dabble in server-side
            rendering with Next.js and React Query.
          </p>
        </div>
      </section>
    </>
  );
};

export default Experiance;
