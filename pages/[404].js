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

      <div className=" absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-center">
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
