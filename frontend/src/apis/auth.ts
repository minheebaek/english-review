import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export async function signIn(username: string, password: string) {
  return await axios
    .post(`${API_BASE_URL}/auth/signin`, {
      username,
      password,
    })
    .then((res) => {
      const user = res.data;
      return user;
    });
}

export const logout = () => {
  localStorage.removeItem("user");
};
