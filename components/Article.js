import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
//
import { Pagination, FreeMode } from "swiper";

const Article = () => {
  const [blog, setblog] = useState(3);
  const data = [1, 3, 4, 43, 12, 5, 7, 6];
  useEffect(() => {
    if (window.innerWidth <= 1000 && window.innerWidth >= 650 ) {
      setblog(2);
    } else if (window.innerWidth <= 650) {
      setblog(1);
    } else {
      setblog(3);
    }
  }, []);

  return (
    <Swiper
      slidesPerView={blog}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {data?.map((value) => {
        return (
          <SwiperSlide>
            {({ isNext }) => (
              <>
                {isNext ? (
                  <div className=" w-[300px] lg:w-[350px] lg:scale-110 h-[420px] lg:h-[450px]  px-5 py-5 rounded dark:bg-[#253345]">
                    <img
                      src="https://coursework.vschool.io/content/images/2017/08/react.png"
                      alt="image"
                      className=" rounded-md"
                    />
                    <div className=" text-xs dark:text-white flex justify-between items-center mt-2 mb-2">
                      <span>React.js</span> <span>Publihed: 9/12/2022</span>
                    </div>
                    <h1 className=" text-xl">
                      Handle React Forms With Formik {value}
                    </h1>
                    <p className=" text-xs leading-6 h-16 overflow-hidden break-all mt-2 mb-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum culpa nemo vel aperiam eos quas magnam, libero, ex
                      possimus repellat, nulla illo eum dignissimos
                    </p>
                    <Button style="w-full text-sm py-2">
                      Read Full Article{" "}
                      <i className="fa-solid fa-arrow-right-long ml-1"></i>
                    </Button>
                  </div>
                ) : (
                  <div className=" w-[300px] lg:w-[350px] scale-110 lg:scale-95 lg:opacity-80 h-[420px] lg:h-[450px]  px-5 py-5 rounded dark:bg-[#253345]">
                    <img
                      src="https://coursework.vschool.io/content/images/2017/08/react.png"
                      alt="image"
                      className=" rounded-md"
                    />
                    <div className=" text-xs dark:text-white flex justify-between items-center mt-2 mb-2">
                      <span>React.js</span> <span>Publihed: 9/12/2022</span>
                    </div>
                    <h1 className=" text-xl">
                      Handle React Forms With Formik {value}
                    </h1>
                    <p className=" text-xs leading-6 h-16 overflow-hidden break-all mt-2 mb-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illum culpa nemo vel aperiam eos quas magnam, libero, ex
                      possimus repellat, nulla illo eum dignissimos
                    </p>
                    <Button style="w-full text-sm py-2">
                      Read Full Article{" "}
                      <i className="fa-solid fa-arrow-right-long ml-1"></i>
                    </Button>
                  </div>
                )}
              </>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Article;
