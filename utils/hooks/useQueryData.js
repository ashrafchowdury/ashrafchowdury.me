import { useQuery } from "react-query";

export const useQueryData = (key) => {
  return useQuery(key, { staleTime: 500000 });
};
