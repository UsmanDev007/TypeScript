import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Loader  from "../components/Loader";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
  (
    <Suspense
      fallback={<Loader />}
    >
      <Component {...props} />
    </Suspense>
  );
const MainLayout = Loadable(lazy(() => import("../layout/MainLayout")));
const Home = Loadable(lazy(() => import("../pages/Home")));
const About = Loadable(lazy(() => import("../pages/About")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));

export const routes: any = [
  { path: "/", element: <Navigate to="home" /> },
  {
    path: "/",
    element: <MainLayout />,
    // children for oulet
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];
