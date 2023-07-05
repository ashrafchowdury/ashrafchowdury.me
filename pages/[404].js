import { useRouter } from "next/router";
import Head from "next/head";
import Buttons from "../components/ui/Buttons";

//Error Page
const CustomError = () => {
  const router = useRouter();
  return (
    <>
      {/***************** Head section for SEO ****************************/}
      <Head>
        <title>404 Page Not Found</title>
      </Head>

      <div className=" w-full h-[80vh] flex flex-col items-center justify-center">
        <h1 className="heading p-3 text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-10 lg:mb-16">
         [ 404 ] Page Not Found
        </h1>
        <Buttons style="!bg-primary !py-[10px] !px-12 mt-3 !text-light" click={() => router.back()}>
          Go Back
        </Buttons>
      </div>
    </>
  );
};

export default CustomError;
