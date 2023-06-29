import { RouteObject } from "react-router-dom";

import { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NotFoundScreen from "./components/errors/NotFoundScreen";
import LoginLayout from "./layout/LoginLayout";
import MainLayout from "./layout/MainLayout";
import Summary from "./pages/Dashboard/Summary";
import Stores from "./pages/Dashboard/Stores";
import Users from "./pages/Dashboard/Users";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
// const Register = Loadable(
//   lazy(() => import('./pages/authentication/Register'))
// );

//  * HOME PAGE
const Home = Loadable(lazy(() => import("./pages/home/Home")));

const routes: RouteObject[] = [
  {
    path: "welcome",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginLayout />,
      },
      {
        path: "dashboard",
        element: <MainLayout />,
        children: [
          {
            path: "summary",
            element: <Summary />,
          },
          {
            path: "stores",
            element: <Stores />,
          },
          {
            path: "users",
            element: <Users />,
          },
        ],
      },
      // {
      //   path: 'register',
      //   element: <Register />,
      // },
    ],
  },

  {
    path: "*",

    element: <NotFoundScreen />,
  },
];

export default routes;
