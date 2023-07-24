import { RouteObject, redirect } from "react-router-dom";

import { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NotFoundScreen from "./components/errors/NotFoundScreen";
import LoginLayout from "./layout/LoginLayout";
import MainLayout from "./layout/MainLayout";
import Summary from "./pages/Dashboard/Summary";
import Stores from "./pages/Dashboard/Stores";
import Users from "./pages/Dashboard/Users";
import Permissions from "./pages/Dashboard/Permissions";
import Billing from "./pages/Dashboard/Billing";
import Programs from "./pages/Dashboard/Programs";
import Campaigns from "./pages/Dashboard/Campaigns";
import Analytics from "./pages/Dashboard/Analytics";
import Tools from "./pages/Dashboard/Tools";
import Integrations from "./pages/Dashboard/Integrations";
import PrivateRoute from "./components/auth/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "summary",
          },
          {
            path: "stores",
            element: <Stores />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "permissions",
            element: <Permissions />,
          },
          {
            path: "billing",
            element: <Billing />,
          },
          {
            path: "programs",
            element: <Programs />,
          },
          {
            path: "campaigns",
            element: <Campaigns />,
          },
          {
            path: "analytics",
            element: <Analytics />,
          },
          {
            path: "tools",
            element: <Tools />,
          },
          {
            path: "Integrations",
            element: <Integrations />,
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
