// src/recoil/auth.ts
import { atom, useSetRecoilState } from "recoil";

export const tokenState = atom<string | null>({
  key: "tokenState",
  default: "asdfasdfs",
});

export const useAuthentication = () => {
  const setToken = useSetRecoilState(tokenState);

  const login = (token: string, expirationTime: number) => {
    localStorage.setItem(
      "loginInfo",
      JSON.stringify({
        token,
        expirationTime,
      })
    );
    setToken(token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return { login, logout };
};
