import React from "react";
import Nav from "../../components/Nav";
import Heading from "../../components/Heading";
import Projects from "../../components/Projects";

const projects = () => {
  return (
    <>
      <Nav />
      <Heading title="Projects" style=" lg:!mt-16 lg:!mb-28" />

      <section className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto flex flex-col items-center mb-5">
        <Projects />
      </section>
    </>
  );
};

export default projects;
