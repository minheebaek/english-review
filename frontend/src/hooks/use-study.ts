import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyStudies, postMyStudy } from "../apis/study";
import { MyStudyFormData } from "../types/interface";
import { showToastByCode } from "../utils/response";

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

export const useMyStudyPatchQuery = (userId?: number, contents?: string) => {
  return useQuery({
    queryKey: ["MyStudyWriteQuery"],
    queryFn: () => getMyStudies(),
  });
};

export const useMyStudyPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MyStudyFormData) => {
      return postMyStudy(data);
    },

    onSuccess(data, variables, context) {
      console.log(data, variables, context);
      queryClient.invalidateQueries({ queryKey: ["MyStudyQuery"] });
    },

    onError(error: any, variables, context) {
      showToastByCode(error.response.data.code);
    },
  });
};
