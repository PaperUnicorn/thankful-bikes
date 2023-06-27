import { RouteObject } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import { Suspense, lazy } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NotFoundScreen from "./components/errors/NotFoundScreen";


const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import('./pages/Login')));
// const Register = Loadable(
//   lazy(() => import('./pages/authentication/Register'))
// );

//  * HOME PAGE
const Home = Loadable(lazy(() => import('./pages/home/Home')));

const routes: RouteObject[] = [
    {
      path: 'welcome',
      children: [
        {
            path: '',
            element: <Home />,
        },
        {   
            path: 'login',
            element: <Login />,
        },
        // {
        //   path: 'register',
        //   element: <Register />,
        // },
      ],
    },
  
    {
      path: '*',
      
      element: <NotFoundScreen />,
    },
  ];
  
  export default routes;