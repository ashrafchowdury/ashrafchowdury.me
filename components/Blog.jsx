import { useData } from "../context/DataContext";

const Blog = () => {
  const { blog } = useData();
  return (
    <>
      {blog.map((data) => {
        return (
          <a
            key={data._id}
            href={data.link}
            className="rounded-lg w-[95%] sm:w-[90%] md:w-[620px] lg:w-[780px] xl:w-[880px] cursor-pointer bg-hLight dark:bg-hDark border-2 border-hLight dark:border-hDark duration-200 p-4 md:p-5"
            target="_blank"
            rel="noreferrer"
          >
            <p className=" flex justify-between items-center">
              <span className="text-sm lg:text-[16px] font-medium">
                Web Dev
              </span>
              <span className="text-xs">
                {new Date(data.publishedAt).toLocaleString()}
              </span>
            </p>
            <h3 className="truncate font-medium text-sm md:text[16px] lg:text-xl mt-3 mb-4 lg:mb-5 capitalize h-auto">
              {data.title}
            </h3>
            <p className="text-xs lg:text-sm h-7 md:h-auto overflow-hidden">
              {data.description}
            </p>
          </a>
        );
      })}
    </>
  );
};

export default Blog;
