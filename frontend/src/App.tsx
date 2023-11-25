import { Outlet, useMatch } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import Home from "./pages/home";

function App() {
  const pathInfo = useMatch("/");

  return (
    <div className="relative">
      <Navbar />
      {pathInfo?.pathname === "/" ? <Home /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default App;
