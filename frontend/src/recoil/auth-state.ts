import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const tokenState = atom<string | null>({
  key: "tokenState",
  default: null,
});

export const isAuthenticatedState = atom<boolean>({
  key: "isAuthenticatedState",
  default: false,
});

export const useAuthentication = () => {
  const setToken = useSetRecoilState(tokenState);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

  const login = (token: string) => {
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
  };

  const checkAuthentication = () => {
    const token = localStorage.getItem("token");

    if (token) {
      setToken(token);
      setIsAuthenticated(true);
    }
  };

  return { login, logout, checkAuthentication };
};
