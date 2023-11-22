import axios from "axios";
import {
  LoginResponse,
  RegisterResponse,
  RegisterUser,
} from "../types/interface";

const API_BASE_URL = "http://localhost:8080";

export async function signIn(username: string, password: string) {
  return await axios
    .post(`${API_BASE_URL}/auth/signin`, {
      username,
      password,
    })
    .then((res) => {
      const user: LoginResponse = res.data;
      return user;
    });
}

export async function signUp(data: RegisterUser) {
  return await axios
    .post(`${API_BASE_URL}/auth/signup`, {
      data,
    })
    .then((res) => {
      const registerRes: RegisterResponse = res.data;
      return registerRes;
    });
}
