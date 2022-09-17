import Nav from "../components/Nav";
import Button from "../components/Button";
export default function Home() {
  return (
    <>
      <Nav />
      {/********* Header Section ************/}
      <header className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto text-center my-14 xl:mt-20">
        <p className=" xl:text-xl uppercase font-bold lg:mb-8">
          HI, MY NAME IS
        </p>
        <h1 className="gradiant_text text-5xl md:text-[75px] lg:text-[84px] xl:text-[90px] xl:leading-[110px] font-bold lg:mb-7">
          Ashraf Chowdury. <br />{" "}
          <span className=" text-5xl md:text-[75px] lg:text-[75px] xl:!text-[80px]">
            {" "}
            I am a front-end developer.
          </span>
        </h1>
        <p className=" text-sm md:text-[16px] lg:text-lg md:w-11/12 lg:w-5/6 xl:w-[950px] md:mx-auto leading-6 md:leading-8 xl:leading-10 lg:mb-9">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          nemo expedita illo? Eveniet ipsum repudiandae doloribus unde enim
          quod, voluptatum sapiente beatae, est sed officia excepturi ex ullam
          suscipit? Nihil?
        </p>
        <Button>
          <i className="fa-solid fa-code-fork lg:mr-1"></i> Do You Want To Work
          With Me?
        </Button>
        <Button>
          Work
        </Button>
      </header>

      {/********* Cetagory Section ************/}
    </>
  );
}
