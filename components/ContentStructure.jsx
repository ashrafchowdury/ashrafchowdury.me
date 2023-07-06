import { PortableText } from "@portabletext/react";
import { BsHash } from "react-icons/bs";

export const customizedComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) null;
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).fit("max").auto("format")}
          //you can also add .width(320).height(240) before .fit function
        />
      );
    },
    code: ({ value }) => {
      return <pre className="code overflow-auto">{value.code}</pre>;
    },
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a href={value.href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2
        id={`${children}`.toLocaleLowerCase()}
        className=" duration-300 cursor-pointer flex items-center group/item "
      >
        <div className="hidden md:flex items-center justify-center md:mr-2 lg:mr-3 p-[5px] rounded-lg bg-hLight dark:bg-hDark  invisible group-hover/item:visible duration-200">
          <BsHash className="text-xs md:text-[16px] lg:text-lg xl:text-xl" />
        </div>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={`${children}`.toLocaleLowerCase()}>{children}</h3>
    ),
  },
};

const tableOfContentComponents = {
  block: {
    h2: ({ children }) => (
      <a href={`#${children}`.toLocaleLowerCase()}>{children}</a>
    ),
    h3: ({ children }) => (
      <a href={`#${children}`.toLocaleLowerCase()} className=" ml-5">
        {children}
      </a>
    ),
  },
};

const ContentStructure = ({ content }) => {
  return (
    <article className=" flex items-start justify-between ">
      <section className=" relative w-full lg:w-[720px] xl:w-[900px] ">
        <div className=" w-[2px] absolute top-1 bottom-3 bg-hLight dark:bg-hDark"></div>

        <div className="detaile ml-6 sm:ml-10 lg:ml-[55px] xl:ml-16">
          <PortableText
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}
            value={content}
            components={customizedComponents}
          />
        </div>
      </section>

      <div className="lg:w-[230px] xl:w-[280px] ml-10 sticky top-0 right-0 bg-hLight dark:bg-hDark pb-1 rounded-lg lg:block hidden">
        <div className="!text-sm font-semibold py-3 px-5 bg-hLight dark:bg-hDark w-full !rounded-t-lg !mx-0 !mt-0 !mb-3">
          Table of Contents
        </div>
        <div className="table_content flex flex-col">
          <PortableText
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET}
            value={content}
            components={tableOfContentComponents}
          />
        </div>
      </div>
    </article>
  );
};

export default ContentStructure;
