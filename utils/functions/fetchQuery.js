import { sanityClient } from "../../sanity";

//fetch data using React Query 
export const fetchQuery = async (client, key, query) => {
  //client: queryClient, key: unique key, query: query path
  //key is nique key it is also use as a variable name
  await client.prefetchQuery(key, () => {
    const key = sanityClient.fetch(query);
    return key;
  });
};
