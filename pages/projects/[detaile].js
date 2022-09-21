import Nav from "../../components/Nav";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const detaile = () => {
  return (
    <>
      <Nav />
      {/* Main Image */}
      <img
        src="https://cdn.dribbble.com/users/937198/screenshots/16179528/media/785b8fcc5b0eaf558af4fb7ea15a7a0f.png?compress=1&resize=1000x750&vertical=top"
        alt="image"
        className="w-[90%] sm:w-[85%] md:w-[700px] lg:w-[1000px] xl:w-[1050px]  md:h-[360px] lg:h-[550px] object-cover mx-auto rounded"
      />

      {/***************** Artical Section ************************/}
      <article className="blog w-[90%] sm:w-[85%] md:w-[700px] lg:w-[1000px] xl:w-[1050px] mx-auto mb-16 lg:mb-24">
        {/* publishing data and user Info */}

        <span className=" mt-1 md:mt-2 mb-2 lg:mb-5 text-xs md:text-sm dark:text-white block">
          {" "}
          Publish Data: 9/2/2021
        </span>

        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl lg:leading-[65px] font-bold lg:mb-6">
          Chat Application
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam harum
          modi ratione tempora debitis blanditiis? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ullam harum modi ratione tempora debitis
          blanditiis?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          recusandae ad nesciunt veritatis excepturi! At omnis cum maiores eos
          porro.
        </p>

        <span className=" dark:text-white text-lg lg:text-2xl font-bold mt-8 lg:mt-10 mb-2 lg:mb-4 block">
          Build With
        </span>
        <div className="current_stack w-full flex flex-wrap">
          <span>Javascript / Node.js</span>
          <span>React.js / Next.js</span>
          <span>Redux / Context</span>
          <span>Firebase / MongoDB</span>
        </div>

        <div className=" flex items-center justify-center mt-8 md:mt-20">
          <a href="https://github.com/ashrafchowdury" target="_blank">
            <Button style=" py-[7px] md:py-[9px] px-8 md:px-12 text-sm lg:text-lg font-bold">
              <i className="fa-solid fa-code-compare mr-1"></i> View Repo
            </Button>
          </a>
          <a href="" className=" text-sm lg:text-lg text-center ml-4 md:ml-6 ">
            <i className="fa-solid fa-up-right-from-square mr-1"></i>
            View Website
          </a>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default detaile;
