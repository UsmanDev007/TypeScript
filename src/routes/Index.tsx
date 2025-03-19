import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { PrivateRoute } from "./PrivateRoute";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

const MainLayout = Loadable(lazy(() => import("../layout/MainLayout")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const Login = Loadable(lazy(() => import("../pages/Login")));
const About = Loadable(lazy(() => import("../pages/About")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));



export const routes: any = [
  { path: "/", element: <Navigate to="home" /> },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/login", element: <Login /> },
      {
        element: <PrivateRoute />,
        children: [
          { path: "/home", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/contact", element: <Contact /> },
        ],
      },
    ],
  },
];
