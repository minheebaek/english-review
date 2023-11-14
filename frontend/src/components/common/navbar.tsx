import { NavLink, useNavigate } from "react-router-dom";

import { navbarRoutes } from "../../utils/router";

import Layout from "./layout";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-primary py-9  text-white">
      <Layout>
        <div className="flex justify-between items-center">
          <div className="flex-1 font-bold text-xl uppercase">Review us</div>
          <ul className="flex-1 flex items-center gap-x-12">
            {navbarRoutes?.map((route) => (
              <NavLink
                to={route.pathname}
                className={({ isActive }) => {
                  return isActive
                    ? "text-secondary font-bold"
                    : "text-white font-bold";
                }}
              >
                {route.label}
              </NavLink>
            ))}
          </ul>
          <button
            onClick={() => navigate("/auth")}
            className="btn btn-sm btn-secondary text-white "
          >
            로그인
          </button>
        </div>
      </Layout>
    </nav>
  );
};

export default Navbar;
