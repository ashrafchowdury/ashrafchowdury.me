import { useRouter } from "next/router";
import Head from "next/head";
import Button from "../components/utilities/Button";

//Error Page
const CustomError = () => {
  const router = useRouter();
  return (
    <>
      {/***************** Head section for SEO ****************************/}
      <Head>
        <title>404 Page Not Found</title>
      </Head>

      <div className=" my-40 md:my-52 text-center">
        <h1 className="gradiant_text p-3 w-full text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-10 lg:mb-16">
          404 Page Not Found
        </h1>
        <Button style=" py-[10px] px-12 mt-2" click={() => router.back()}>
          Go Back
        </Button>
      </div>
    </>
  );
};

export default CustomError;
