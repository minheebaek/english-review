import { MyStudyFormData, MyStudyPostResponse } from "../types/interface";
import API from "../utils/api";

const userInfo = JSON.parse(localStorage.getItem("loginInfo")!);

export const getMyStudies = async (option?: string) => {
  return await API.get("/study", {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  }).then((res) => res.data);
};

export const postMyStudy = async (data: MyStudyFormData) => {
  return await API.post("/mystudy/create", JSON.stringify(data)).then((res) => {
    const resData: MyStudyPostResponse = res.data;
    return resData;
  });
};
