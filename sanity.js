import {
  createClient,
  createCurrentUserHook,
  createImageUrlBuilder,
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

//configure the backend
export const config = {
  projectId: `${process.env.SANITY_PROJECT_ID}`,
  dataset: `${process.env.SANITY_PROJECT_DATASET}`,
  apiVersion: "2021-10-21", // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
};

//setup clients for fetching data in the getProps page funcion
export const sanityClient = createClient(config);
//genarating the Image url
export const urlFor = (source) => imageUrlBuilder(config).image(source);
//Helper function for usign the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
