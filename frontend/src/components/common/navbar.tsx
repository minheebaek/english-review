import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import clsx from "clsx";
import { Menu, X } from "lucide-react";

import "./animation.css";

import { navbarRoutes } from "../../utils/router";

import Layout from "./layout";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbarOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-primary py-9  text-white">
      <Layout>
        {/* mobile view */}
        <div className="flex sm:hidden justify-between items-center px-4">
          <Link to={"/"} className="uppercase text-lg">
            review us
          </Link>
          <button
            className="btn btn-secondary btn-sm text-white p-1"
            onClick={() => toggleNavbarOpen()}
          >
            <Menu size={24} className="swap-off fill-current" />
          </button>
        </div>
        {/* tablet & desktop view */}
        <div className="hidden sm:flex justify-between items-center gap-x-10">
          <Link
            to={"/"}
            className="flex-initial lg:flex-1 font-bold text-xl uppercase"
          >
            Review us
          </Link>
          <ul className="flex-1 flex flex-shrink-0 justify-around items-center gap-x-12">
            {navbarRoutes?.map((route) => (
              <NavLink
                to={route.pathname}
                key={route.pathname}
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
      {/* Mobile Nav */}
      <div
        className={clsx(
          "fixed inset-0 flex",
          isOpen ? "translate-x-0" : "-translate-x-[100%]",
          {
            "slide-in": isOpen,
            "slide-out": !isOpen,
          }
        )}
      >
        <div className={clsx("w-1/2 h-full bg-primary px-5 pt-10")}>
          <div className="flex justify-between">
            <Link
              to={"/"}
              onClick={toggleNavbarOpen}
              className="uppercase text-lg"
            >
              review us
            </Link>
            <button onClick={toggleNavbarOpen}>
              <X size={25} />
            </button>
          </div>
          <ul className="flex flex-col gap-y-5 mt-10">
            {navbarRoutes?.map((route) => (
              <NavLink
                to={route.pathname}
                key={route.pathname}
                onClick={toggleNavbarOpen}
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
        </div>
        <div className="flex-1 " onClick={toggleNavbarOpen}></div>
      </div>
    </nav>
  );
};

export default Navbar;
