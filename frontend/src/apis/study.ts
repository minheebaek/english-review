import API from "../utils/api";

const userInfo = JSON.parse(localStorage.getItem("loginInfo")!);

export const getMyStudies = async (option?: string) => {
  return await API.get("/study", {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  }).then((res) => res.data);
};
