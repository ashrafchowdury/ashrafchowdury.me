import Nav from "../components/Nav";
import Button from "../components/Button";
import Article from "../components/Article";
import Message from "../components/Message";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
export default function Home() {
  const name = [
    "Javascript",
    "React.js",
    "Next.js",
    "Redux",
    "TailwindCSS",
    "React Query",
    "Firebase",
    "Formik",
    "SCSS",
  ];
  return (
    <>
      <Nav />
      {/********* Header Section ************/}
      <Message />
      <header className=" w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto text-center mt-10 xl:mt-14">
        <p className=" text-sm sm:text-[16px] md:text-lg lg:text-xl uppercase font-bold mb-6 md:mb-7 lg:mb-10">
          HI, MY NAME IS
        </p>
        <h1 className="gradiant_text text-[34px] sm:text-[40px] md:text-5xl lg:text-[72px] xl:text-[90px] leading-[45px] xl:leading-[110px] font-bold mb-2 sm:mb-3 md:mb-5 lg:mb-4 xl:mb-1">
          Ashraf Chowdury. <br />
        </h1>
        <h2 className="gradiant_text capitalize text-[32px] sm:text-[38px] md:text-[42px] lg:text-[68px] xl:text-[80px] leading-[45px] lg:leading-[88px] xl:leading-[110px] font-bold mb-3 md:mb-5">
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

      {/********* Blog Section ************/}
      <h3 className=" text-lg md:text-2xl lg:text-3xl text-center font-bold mt-9 md:mt-14 mb-7 md:mb-3 lg:mb-3">
        My Latest Article <i className="fa-solid fa-newspaper ml-2"></i>
      </h3>

      <Article />

      <Bio />

      <h3 className=" text-[22px] md:text-3xl lg:text-4xl font-bold uppercase text-center mt-12 xl:mt-32 mb-10 lg:mb-20 xl:mb-24">
        My Coding Project{" "}
        <i className="fa-solid fa-screwdriver-wrench ml-1 font-semibold"></i>
      </h3>

      <Projects />

      <h3 className=" text-[22px] md:text-3xl lg:text-4xl font-bold uppercase text-center mt-10 lg:mt-6 mb-7 lg:mb-12">
        My Ecosystem{" "}
        <i className="fa-solid fa-network-wired ml-1 font-semibold"></i>
      </h3>

      <section className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1150px] mx-auto flex flex-wrap justify-center">
        {name.map((value) => {
          return (
            <div className=" flex items-center border border-[#3792E4] py-[8px] lg:py-[10px] px-[14px] lg:px-[16px] xl:px-[20px] m-[5px] md:m-[10px] rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                alt="image"
                className=" w-[20px] md:w-[28px] lg:w-[32px] mr-2 lg:mr-3"
              />
              <p className=" text-sm md:text-[16px] lg:w-lg font-bold">
                {value}
              </p>
            </div>
          );
        })}
      </section>

      <Footer />
    </>
  );
}
