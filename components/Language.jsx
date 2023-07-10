import { urlFor } from "../sanity";
import { useData } from "../context/DataContext";

const Language = () => {
  return (
    <>
      <Tech
        title="Frontend"
        about="I try to use the best frontend technologies to make my life easier."
      />
      <Tech
        title="Backend"
        about="I'm not an expert in Backend, but I know how to use these techs."
      />
      <Tech
        title="Tools"
        about="Tools I used to maintain my code and design something."
      />
    </>
  );
};

export default Language;

export const Tech = ({ title, about }) => {
  const { languages } = useData();
  return (
    <>
      <h4 className=" sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">{title}</h4>
      <p className=" w-[80%] md:w-full mx-auto text-xs md:text-sm lg:text-[16px] mt-2 mb-6 md:mb-8 text-center">
        {about}
      </p>
      <div className=" flex flex-wrap justify-center items-center md:mb-12 sm:mb-10 mb-8">
        {languages
          .filter((value) => {
            return value.filed == title;
          })
          .map((value) => {
            return (
              <div
                key={value._id}
                className=" bg-hLight dark:bg-hDark flex items-center py-2 px-3 md:px-4 m-[5px] md:m-[6px] lg:m-[7px] rounded-lg cursor-pointer"
              >
                <img
                  src={urlFor(value.mainImage).url()}
                  alt={value.name}
                  loading="lazy"
                  className=" w-[18px] sm:w-5 md:w-5 lg:w-6 mr-2 lg:mr-3"
                />
                <p className=" text-xs sm:text-sm md:text-[16px] lg:text-lg font-medium">
                  {value.name}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};
