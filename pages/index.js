import Nav from "../components/Nav";
import Button from "../components/Button";
export default function Home() {
  return (
    <>
      <Nav />
      {/********* Header Section ************/}
      <header className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto text-center mt-10 xl:mt-14">
        <p className=" text-sm md:text-lg lg:text-xl uppercase font-bold mb-6 md:mb-7 lg:mb-10">
          HI, MY NAME IS
        </p>
        <h1 className="gradiant_text text-[34px] md:text-5xl lg:text-[78px] xl:text-[90px] leading-[45px] xl:leading-[110px] font-bold mb-2 md:mb-5 lg:mb-4 xl:mb-1">
          Ashraf Chowdury. <br />
        </h1>
        <h2 className="gradiant_text capitalize text-[32px] md:text-[42px] lg:text-[72px] xl:text-[80px] leading-[45px] lg:leading-[88px] xl:leading-[110px] font-bold mb-3 md:mb-5">
          I am a front-end developer.
        </h2>
        <p className=" text-xs md:text-[16px] lg:text-lg md:w-11/12 lg:w-5/6 xl:w-[950px] md:mx-auto leading-7 md:leading-8 lg:leading-10 mb-7 md:mb-9 lg:mb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          nemo expedita illo? Eveniet ipsum repudiandae doloribus unde enim
          quod, voluptatum sapiente beatae, repudiandae doloribus unde enim
        </p>
        <Button style="py-[10px] px-6 lg:py-3 lg:px-8 text-sm lg:text-lg text-semibold">
          <i className="fa-solid fa-code-fork lg:mr-1"></i> Do You Want To Work
          With Me?
        </Button>
      </header>

      {/********* Cetagory Section ************/}
    </>
  );
}
