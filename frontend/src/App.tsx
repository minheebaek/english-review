import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/foonter";

function App() {
  // // 요청 받은 정보를 담아줄 변수 선언
  // const [testStr, setTestStr] = useState("");

  // // 변수 초기화
  // function callBack(str: string) {
  //   setTestStr(str);
  // }

  // // 첫 번째 렌더링을 마친 후 실행
  // useEffect(() => {
  //   axios({
  //     url: "/api/test",
  //     method: "GET",
  //   }).then((res) => {
  //     callBack(res.data);
  //   });
  // }, []);

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home", { replace: false });
  }, [navigate]);

  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
