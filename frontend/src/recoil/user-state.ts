import { atom } from "recoil";

export interface User {
  username: string;
  nickName: string;
  token?: string;
}

export type UserState = User | null;

export const userState = atom<UserState>({
  key: "userState",
  default: null,
});
