import Nav from "../../components/Nav";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { sanityClient, urlFor } from "../../sanity";
import { dehydrate, QueryClient, useQuery } from "react-query";

const detaile = (dehydratedState) => {
  // const { data } = useQuery("post", dehydratedState);
  const { data, isError } = useQuery("post", {
    staleTime: 500000,
  });

  return (
    <>
      <Nav />
      {/* Main Image */}
      <img
        src={urlFor(data.mainImage).url()}
        alt="image"
        className="w-[90%] sm:w-[85%] md:w-[700px] lg:w-[1000px] xl:w-[1050px]  md:h-[360px] lg:h-[550px] object-cover mx-auto rounded"
      />

      {/***************** Artical Section ************************/}
      <article className="blog w-[90%] sm:w-[85%] md:w-[700px] lg:w-[1000px] xl:w-[1050px] mx-auto mb-16 lg:mb-24">
        <span className=" mt-1 md:mt-2 mb-2 lg:mb-5 text-xs md:text-sm dark:text-white block">
          {" "}
          {new Date(data.publishedAt).toLocaleString()}
        </span>

        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl lg:leading-[65px] font-bold lg:mb-6">
          {data.title}
        </h1>
        <p>{data.description_1}</p>
        {data.description_2 && <p>{data.description_2}</p>}

        <span className=" dark:text-white text-lg lg:text-2xl font-bold mt-8 lg:mt-10 mb-2 lg:mb-4 block">
          Build With
        </span>
        <div className="current_stack w-full flex flex-wrap">
          {data.categories.map((stack, ind) => {
            return <span key={ind}>{stack.title}</span>;
          })}
        </div>

        <div className=" flex items-center justify-center mt-8 md:mt-20">
          <a href={data.github_link} target="_blank">
            <Button style=" py-[7px] md:py-[9px] px-8 md:px-12 text-sm lg:text-lg font-bold">
              <i className="fa-solid fa-code-compare mr-1"></i> View Repo
            </Button>
          </a>
          <a
            href={data.website}
            className=" text-sm lg:text-lg text-center ml-4 md:ml-6 "
          >
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

//genarating blog path
export async function getStaticPaths() {
  //query
  const query = `*[_type == "project"]{
      _id,
      slug {
        current
      }
    }`;
  //blog path request || sanityClient is come from the sanity.js page
  const posts = await sanityClient.fetch(query);
  //retrive the blog path
  const paths = posts.map((value) => ({
    params: {
      slug: value.slug.current,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    mainImage,
    publishedAt,
    slug,
    description_1,
    description_2,
    github_link,
    website,
    categories[] -> {
      title,
     },
  }`;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("post", () => {
    const post = sanityClient.fetch(query, {
      slug: params?.slug,
    });
    return post;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

//get the blogdata
// export async function getStaticProps({ params }) {
//   //bolg post query
//   const query = `*[_type == "project" && slug.current == $slug][0]{
//     _id,
//     title,
//     mainImage,
//     publishedAt,
//     slug,
//     description_1,
//     description_2,
//     github_link,
//     website,
//     categories[] -> {
//       title,
//      },
//   }`;

//   //blog request || sanityClient is come from the sanity.js page
//   const post = await sanityClient.fetch(query, {
//     slug: params?.slug,
//   });

//   //send data to post page
//   return {
//     props: {
//       post,
//     },
//     revalidate: 60, //after 60 send it will update the old cached version
//   };
// }
