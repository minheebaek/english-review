import { useQuery } from "@tanstack/react-query";
import { getMyStudies } from "../apis/study";

export const useMyStudiesQuery = (userid?: number, option?: string) => {
  return useQuery({
    queryKey: ["mystudyquery"],
    queryFn: () => getMyStudies(),
  });
};

export const useMyStudyQuery = () => {};
