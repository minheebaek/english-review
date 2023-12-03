import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getMyStudies,
  getMyStudyDetail,
  patchMyStudy,
  postMyStudy,
} from "../apis/study";
import {
  MyStudyFormData,
  MyStudyDetailGetResponse,
  MyStudyGetResponse,
} from "../types/interface";
import { showToastByCode } from "../utils/response";
import { AxiosError } from "axios";

export const useMyStudiesQuery = () => {
  return useQuery<MyStudyGetResponse, AxiosError>({
    queryKey: ["MyStudiesQuery"],
    queryFn: () => getMyStudies(),
    staleTime: Infinity,
  });
};

export const useMyStudyDetailQuery = (boardNumber?: number) => {
  return useQuery<MyStudyDetailGetResponse, AxiosError>({
    queryKey: ["MyStudyDetailQuery"],
    queryFn: () => getMyStudyDetail(boardNumber!),
    enabled: Number.isInteger(boardNumber) && !!boardNumber,
    staleTime: Infinity,
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

export const useMyStudyPatchMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      boardNumber,
    }: {
      data: MyStudyFormData;
      boardNumber: number;
    }) => {
      return patchMyStudy(data, boardNumber);
    },

    onSuccess(data, variables, context) {
      console.log(data, variables, context);
      queryClient.invalidateQueries({
        queryKey: ["MyStudyQuery", "MyStudyDetailQuery"],
      });
    },

    onError(error: any, variables, context) {
      showToastByCode(error.response.data.code);
    },
  });
};
