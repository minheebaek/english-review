import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Auth from "../pages/auth";
import Home from "../pages/home";
import Error from "../pages/error";
import MyStudy from "../pages/my-study/my-study";
import MyStudyDetail from "../pages/my-study/my-study-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "mystudy",
        element: <MyStudy />,
        children: [
          {
            path: "/mystudy/:studyId",
            element: <MyStudyDetail />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <Error />,
  },
]);

export const navbarRoutes = [
  {
    label: "홈",
    pathname: "/",
  },
  {
    label: "마이 스터디",
    pathname: "/mystudy",
  },
  {
    label: "꿀팁",
    pathname: "/withStudy",
  },
  {
    label: "챌린저스",
    pathname: "/challengers",
  },
];
