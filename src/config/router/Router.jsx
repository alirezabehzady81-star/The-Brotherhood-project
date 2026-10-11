import { createBrowserRouter } from "react-router-dom";
// import pages
import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout";
import { Landing } from "../../pages/Landing/Landing";
// import { AuthenticationRouter } from "./Authentication.router";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Landing /> }],
  },
  // {
  //   path: "/Authentication",
  //   element: <Authentication />,
  //   children: [...AuthenticationRouter],
  // },
]);

export { Routes };
