import { useState, Fragment } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { tokenState } from "../../recoil/auth-state";

import clsx from "clsx";
import { Menu, X } from "lucide-react";

import { Menu as AvatarMenu } from "@headlessui/react";

import { navbarRoutes } from "../../utils/routes-info";

import Layout from "./layout";

import "./animation.css";
import Avatar from "./avatar";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbarOpen = () => {
    setOpen(!isOpen);
  };

  const loginInfo = useRecoilValue(tokenState);

  const links = [
    { href: "/account-settings", label: "알림" },
    { href: "/support", label: "프로필" },
    { href: "/license", label: "로그아웃" },
  ];

  return (
    <nav className="fixed w-full bg-primary py-5 sm:py-7 text-white z-40 shadow-lg">
      <Layout>
        {/* mobile view */}
        <div className="flex sm:hidden justify-between items-center px-4">
          <Link to={"/"} className="uppercase text-lg font-bold">
            review us
          </Link>
          <button
            className="btn btn-secondary btn-sm text-white p-1"
            onClick={() => toggleNavbarOpen()}
          >
            <Menu size={24} className="swap-off fill-current" />
          </button>
          {/* Mobile Nav */}
          <div
            className={clsx(
              " fixed flex inset-0 z-50 ",
              isOpen ? " translate-x-0 slide-in " : " -translate-x-[100%] "
            )}
          >
            <div className={clsx("w-1/2 h-full bg-primary px-5 pt-6")}>
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
        </div>
        {/* tablet & desktop view */}
        <div className="hidden sm:flex justify-between items-center gap-x-10">
          <Link
            to={"/home"}
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
          {loginInfo ? (
            <AvatarMenu as="div" className="relative">
              <AvatarMenu.Button>
                <Avatar />
              </AvatarMenu.Button>
              <AvatarMenu.Items className="absolute p-2 right-0 mt-2 w-28 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                {links.map((link) => (
                  <AvatarMenu.Item key={link.href} as={Fragment}>
                    {({ active }) => (
                      <a
                        href={link.href}
                        className={`transition-colors group flex w-full items-center rounded-md px-2 py-2 text-sm  ${
                          active ? "bg-primary" : " text-black"
                        }`}
                      >
                        {link.label}
                      </a>
                    )}
                  </AvatarMenu.Item>
                ))}
              </AvatarMenu.Items>
            </AvatarMenu>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="btn btn-sm btn-secondary text-white "
            >
              로그인
            </button>
          )}
        </div>
      </Layout>
    </nav>
  );
};

export default Navbar;
