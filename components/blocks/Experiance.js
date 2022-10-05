import React from "react";
import Heading from "../utilities/Heading";
import { PortableText } from "@portabletext/react";

const Experiance = ({ data }) => {
  return (
    <>
      <Heading title="Experience 🏹" />
      <section
        data-aos="fade-right"
        className="experiance w-[90%] md:w-[550px] lg:w-[750px] text-center mx-auto mb-28 lg:mb-44"
      >
        {data.map((value) => {
          return (
            <React.Fragment key={value._id}>
              <PortableText
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}
                value={value.body}
              />
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};

export default Experiance;
