import React from "react";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import Head from "next/head";

//Error Page
const CustomError = () => {
  const router = useRouter();
  return (
    <>
      {/***************** Head section for SEO ****************************/}
      <Head>
        <title>404 Page Not Found</title>
      </Head>
      <Nav />
      <div className=" absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-center">
        <h1 className="gradiant_text p-3 w-full text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-10 lg:mb-16">
          404 Page Not Found
        </h1>
        <button
          className="gradiant_btn py-2 px-6 text-sm lg:text-lg rounded text-white font-bold"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default CustomError;
