import { useQuery } from "@tanstack/react-query";
import { getFakeMyStudies } from "../apis/fake-study";
import { MyStudyGetResponse } from "../types/interface";

export const useFakeMyStudiesQuery = (userid?: number, option?: string) => {
  return useQuery({
    queryKey: ["MyFakeStudiesQuery"],
    queryFn: () => getFakeMyStudies(),
    select(data: MyStudyGetResponse) {
      return data;
    },
    staleTime: Infinity,
  });
};
