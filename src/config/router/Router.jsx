import { createBrowserRouter } from "react-router-dom";
// import pages
import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout";
import { AuthWrapper } from "../../components/Layouts/AuthLayout/AuthWrapper";
import { AuthenticationRouter } from "./Authentication.router";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  { path: "/Authentication", element: <AuthWrapper />, children:[...AuthenticationRouter]},
]);

export { Routes };
