import Nav from "../components/Nav";
import Button from "../components/Button";
import Article from "../components/Article";
import Message from "../components/Message";
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

      {/********* Blog Section ************/}
      <h3 className=" text-lg md:text-2xl text-center font-bold mt-9 md:mt-14 mb-7">
        My Latest Article <i className="fa-solid fa-newspaper ml-2"></i>
      </h3>

      <Article />

      <section className=" w-[90%] mx-auto mt-16 mb-6 flex flex-col items-center">
        <img
          src="/ashraf.png"
          alt="Ashraf Chowdury"
          className=" w-[100%] h-[260px] object-cover rounded"
        />
        <div className=" w-[100%]">
          <h4 className="gradiant_text text-[26px] my-2 font-bold">
            I’m Ashraf Chowdury.
          </h4>
          <p className=" text-sm md:text-[16px] leading-7 md:leading-8 lg:leading-10 break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            rerum eaque perferendis sint modi iste, aperiam perspiciatis, nihil,
            accusamus a reprehenderit deleniti neque nesciunt labore laboriosam
            nam debitis culpa exercitationem.
          </p>
          <p className=" text-lg font-bold capitalize mt-2 mb-3">
            My current stack
          </p>
          <div className="current_stack w-full flex flex-wrap">
            <span>Javascript / Node.js</span>
            <span>React.js / Next.js</span>
            <span>Redux / Context</span>
            <span>Firebase / MongoDB</span>
          </div>
          <div className=" flex flex-col mt-6">
            <Button style=" w-full py-[10px] text-sm">
              <a
                href="https://twitter.com/Ashraf_365"
                target="_blank"
                className=" w-[50%] py-[10px] px-2"
              >
                <i className="fa-regular fa-file mr-1"></i> Get Resume
              </a>{" "}
              /{" "}
              <a
                href="https://github.com/ashrafchowdury"
                target="_blank"
                className=" w-[100%] py-[10px] px-2"
              >
                <i className="fa-solid fa-code-compare mr-1"></i> View GitHub
              </a>
            </Button>

            <a href="" className=" text-sm mt-4 text-center"></a>
          </div>
        </div>
      </section>

      <h3 className=" text-[22px] font-bold uppercase text-center mt-12 mb-10">
        My Coding Project{" "}
        <i className="fa-solid fa-screwdriver-wrench ml-1 font-semibold"></i>
      </h3>

      <section className="w-[90%] mx-auto flex flex-col items-center mb-5">
        <div className=" mb-8">
          <img
            src="https://cdn.dribbble.com/users/937198/screenshots/16179528/media/785b8fcc5b0eaf558af4fb7ea15a7a0f.png?compress=1&resize=1000x750&vertical=top"
            alt="Ashraf Chowdury"
            className=" w-[100%] h-[220px] object-cover rounded"
          />
          <div className=" w-[100%]]">
            <h4 className=" dark:text-white text-xl my-2 font-bold">
              Chat Application
            </h4>
            <p className=" text-sm md:text-[16px] leading-7 md:leading-8 lg:leading-10 break-all h-[92px] overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              rerum eaque perferendis sint modi iste, aperiam perspiciatis,
              nihil, accusamus a reprehenderit deleniti neque nesciunt labore
              laboriosam.
            </p>
            <p className=" text-[14px] font-bold capitalize mt-1 mb-2">
              Build With:
            </p>
            <div className="current_stack w-full flex flex-wrap">
              <span>Next.js</span>
              <span>Redux</span>
              <span>Firebase</span>
              <span>Tailwind</span>
            </div>
            <div className=" flex flex-row items-center mt-6">
              <a href="https://github.com/ashrafchowdury" target="_blank">
                <Button style=" py-[9px] px-6 text-sm">
                  <i className="fa-solid fa-code-compare mr-1"></i> View GitHub
                </Button>
              </a>
              <a href="" className=" text-sm text-center ml-4 ">
                <i className="fa-solid fa-up-right-from-square mr-1"></i>
                View Website
              </a>
            </div>
          </div>
        </div>

        <div className=" mb-8">
          <img
            src="https://cdn.dribbble.com/users/937198/screenshots/16179528/media/785b8fcc5b0eaf558af4fb7ea15a7a0f.png?compress=1&resize=1000x750&vertical=top"
            alt="Ashraf Chowdury"
            className=" w-[100%] h-[220px] object-cover rounded"
          />
          <div className=" w-[100%]]">
            <h4 className=" dark:text-white text-xl my-2 font-bold">
              Chat Application
            </h4>
            <p className=" text-sm md:text-[16px] leading-7 md:leading-8 lg:leading-10 break-all h-[92px] overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              rerum eaque perferendis sint modi iste, aperiam perspiciatis,
              nihil, accusamus a reprehenderit deleniti neque nesciunt labore
              laboriosam.
            </p>
            <p className=" text-[14px] font-bold capitalize mt-1 mb-2">
              Build With:
            </p>
            <div className="current_stack w-full flex flex-wrap">
              <span>Next.js</span>
              <span>Redux</span>
              <span>Firebase</span>
              <span>Tailwind</span>
            </div>
            <div className=" flex flex-row items-center mt-6">
              <a href="https://github.com/ashrafchowdury" target="_blank">
                <Button style=" py-[9px] px-6 text-sm">
                  <i className="fa-solid fa-code-compare mr-1"></i> View GitHub
                </Button>
              </a>
              <a href="" className=" text-sm text-center ml-4 ">
                <i className="fa-solid fa-up-right-from-square mr-1"></i>
                View Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <h3 className=" text-[22px] font-bold uppercase text-center mt-10 mb-7">
        My Ecosystem{" "}
        <i className="fa-solid fa-network-wired ml-1 font-semibold"></i>
      </h3>

      <section className="w-[90%] mx-auto flex flex-wrap justify-center">
        {name.map((value) => {
          return (
            <div className=" flex border border-[#3792E4] py-[8px] px-[14px] m-[5px] rounded">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                alt="image"
                className=" w-[20px] mr-2"
              />
              <p className=" text-sm">{value}</p>
            </div>
          );
        })}
      </section>

      <footer className="w-[90%] mx-auto mt-16 mb-6">
        <div className=" flex flex-col items-center text-center">
          <p className="text-xl font-blod mb-5">
            Want me building stuff for you? Hit me on Linkedin
          </p>
          <Button style=" py-2 px-6 text-sm">
            <i className="fa-brands fa-linkedin-in mr-1"></i> Linkedin
          </Button>
        </div>

        <div className=" text-center mt-8">
          <h5 className=" text-xl font-bold">Get in touch with Me</h5>
          <p className=" text-sm mt-2 mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            iste voluptatum iure.
          </p>
          <div className="social_links">
            <a href="https://twitter.com/Ashraf_365" target="_blank">
              <i className="fa-brands fa-twitter dark:text-white"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ashraf-chowdury-297301206/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin dark:text-white"></i>
            </a>
            <a
              href="https://www.instagram.com/_ashrafchowdury/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram dark:text-white"></i>
            </a>
            <a href="https://github.com/ashrafchowdury" target="_blank">
              <i className="fa-brands fa-github dark:text-white"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
