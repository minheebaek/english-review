// src/recoil/auth.ts
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const tokenState = atom<string | null>({
  key: "tokenState",
  default: "ㅁㄴㄹㅇㅁㄴㅇㅇㄹㄴ",
});

export const isAuthenticatedState = atom<boolean>({
  key: "isAuthenticatedState",
  default: false,
});

export const useAuthentication = () => {
  const setToken = useSetRecoilState(tokenState);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

  const login = (token: string, expirationTime: number) => {
    // 토큰 저장
    setToken(token);
    setIsAuthenticated(true);

    // 만료 시간에 따라 자동 로그아웃 타이머 설정
    setTimeout(() => {
      logout();
    }, expirationTime * 1000); // expirationTime은 초 단위이므로 밀리초로 변환
  };

  const logout = () => {
    // 로그아웃 시 토큰 및 인증 상태 초기화
    setToken(null);
    setIsAuthenticated(false);
  };

  const checkAuthentication = () => {
    const token = localStorage.getItem("token");

    if (token) {
      // 로그인 시 만료 시간도 받아와서 타이머 설정
      const expirationTime = 3600; // 서버에서 받아온 expirationTime 사용
      login(token, expirationTime);
    }
  };

  return { login, logout, checkAuthentication };
};
