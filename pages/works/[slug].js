import React from "react";
import Head from "next/head";
import { sanityClient, urlFor } from "../../sanity";
import { dehydrate, QueryClient, useQuery } from "react-query";
import ContentStructure from "../../components/ContentStructure";

const Slug = () => {
  const { data } = useQuery("post", { staleTime: 500000 });

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <main className=" mb-16 lg:mb-24">
        {data?.mainImage && (
          <img
            src={urlFor(data?.mainImage).url()}
            alt="image"
            className="w-full h-[180px] sm:h-[200px] md:h-[250px] lg:h-[320px] object-cover shadow-2xl rounded-xl"
            loading="lazy"
          />
        )}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl lg:leading-[65px] font-bold lg:mb-6 md:mt-6 mt-5">
          {data?.title}
        </h1>
        <p className="text-xs md:text-sm lg:text-[16px] leading-5 md:leading-normal mb-20 sm:mb-24 lg:mb-32 w-[95%] md:w-[80%] mt-3 md:mt-4">{data?.description}</p>

        <ContentStructure content={data?.body} />
      </main>
    </>
  );
};

export default Slug;

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
    description,
    mainImage,
    publishedAt,
    slug,
    github_link,
    body,
    description,
    website
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
