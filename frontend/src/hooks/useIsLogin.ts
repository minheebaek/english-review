import { useEffect } from "react";

function useIsLogin() {
  useEffect(() => {
    const userInfo = localStorage.getItem("user");
  }, []);

  return null;
}

export default useIsLogin;
