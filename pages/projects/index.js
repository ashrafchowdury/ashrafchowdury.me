import React from "react";
import Nav from "../../components/Nav";
import Heading from "../../components/Heading";
import Projects from "../../components/Projects";
import { useQuery } from "react-query";

const projects = () => {
  const { data } = useQuery("project");
  return (
    <>
      <Nav />
      <Heading title="Projects" style=" lg:!mt-16 lg:!mb-28" />

      <section className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto flex flex-col items-center mb-5">
        {data?.map((value) => {
          return (
            <React.Fragment key={value._id}>
              <Projects data={value} />
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default projects;
