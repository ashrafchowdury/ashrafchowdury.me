import React from "react";
import Head from "next/head";
import Button from "../../utils/components/Button";
import { sanityClient, urlFor } from "../../sanity";
import { dehydrate, QueryClient, useQuery } from "react-query";

const slug = () => {
  const { data } = useQuery("post", { staleTime: 500000 });

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      {/* Main Image */}
      {data?.mainImage && (
        <img
          src={urlFor(data?.mainImage).url()}
          alt="image"
          className="w-[90%] sm:w-[85%] md:w-[700px] lg:w-[1000px] xl:w-[1050px] md:h-[450px] lg:h-[720px] object-cover mx-auto rounded"
          loading="lazy"
        />
      )}

      {/***************** Artical Section ************************/}
      <article className="blog w-[90%] sm:w-[85%] md:w-[700px] lg:w-[1000px] xl:w-[1050px] mx-auto mb-16 lg:mb-24">
        <span className=" mt-1 md:mt-2 mb-2 lg:mb-5 text-xs md:text-sm dark:text-white block">
          {" "}
          {new Date(data?.publishedAt).toLocaleString()}
        </span>

        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl lg:leading-[65px] font-bold lg:mb-6">
          {data?.title}
        </h1>
        <p>{data?.description_1}</p>
        {data?.description_2 && <p>{data?.description_2}</p>}

        <span className=" dark:text-white text-lg lg:text-2xl font-bold mt-8 lg:mt-10 mb-2 lg:mb-4 block">
          Build With
        </span>
        <div className="current_stack w-full flex flex-wrap">
          {data?.categories.map((stack, ind) => {
            return <span key={ind}>{stack.title}</span>;
          })}
        </div>

        <div className=" flex items-center justify-center mt-8 md:mt-20">
          <a href={data?.github_link} target="_blank">
            <Button style=" py-[7px] md:py-[9px] px-8 md:px-12 text-sm lg:text-lg font-bold">
              <i className="fa-solid fa-code-compare mr-1"></i> View Repo
            </Button>
          </a>
          <a
            href={data?.website}
            className=" text-sm lg:text-lg text-center ml-4 md:ml-6 "
          >
            <i className="fa-solid fa-up-right-from-square mr-1"></i>
            View Website
          </a>
        </div>
      </article>
    </>
  );
};

export default slug;

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
    fallback: false,
  };
}

//get the project data with server side rendering
export async function getStaticProps({ params }) {
  //setup the Query Client to fetch the data in sercer side
  const queryClient = new QueryClient();
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
    direction,
    project_id,
    categories[] -> {
      title,
     },
  }`;

  //Requests for fetching project data for Sanity
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
