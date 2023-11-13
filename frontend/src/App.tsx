import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // 요청 받은 정보를 담아줄 변수 선언
  const [testStr, setTestStr] = useState("");

  // 변수 초기화
  function callBack(str: string) {
    setTestStr(str);
  }

  // 첫 번째 렌더링을 마친 후 실행
  useEffect(() => {
    axios({
      url: "/api/test",
      method: "GET",
    }).then((res) => {
      callBack(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header bg-red-500 text-red-400 bg-primary">
        {testStr}
      </header>
      <h1 className="btn btn-accent btn-outline">asdf</h1>
    </div>
  );
}

export default App;
