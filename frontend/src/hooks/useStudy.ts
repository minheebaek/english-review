import { useQuery } from "@tanstack/react-query";
import { getMyStudies } from "../apis/study";

export const useMyStudiesQuery = (userid?: number, option?: string) => {
  return useQuery({
    queryKey: ["MyStudiesQuery"],
    queryFn: () => getMyStudies(),
  });
};

export const useMyStudyQuery = (userId?: number) => {
  return useQuery({
    queryKey: ["MyStudyQuery"],
    queryFn: () => getMyStudies(),
  });
};

export const useMyStudyWriteQuery = (userId?: number, contents?: string) => {
  return useQuery({
    queryKey: ["MyStudyWriteQuery"],
    queryFn: () => getMyStudies(),
  });
};
