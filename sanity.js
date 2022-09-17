import {
  createClient,
  createCurrentUserHook,
  createImageUrlBuilder,
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

//configure the backend
export const config = {
  projectId: "q1zq7tcr", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
};


//setup clients for fetching data in the getProps page funcion
export const sanityClient = createClient(config);
//genarating the Image url
export const urlFor = (source) => imageUrlBuilder(config).image(source);
//Helper function for usign the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
