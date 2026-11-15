import { createBrowserRouter } from "react-router-dom";
// import pages
import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout";
import { AuthWrapper } from "../../components/Layouts/AuthLayout/AuthWrapper";
import { AuthenticationRouter } from "./Authentication.router";
import { UserPanelRouter } from "./UserPanel.router.jsx";
import Error404 from "../../pages/Errors/Error404/Error404";
import UserLayout from "../../components/Layouts/UserLayout/UserLayout.jsx";

const Routes = createBrowserRouter([
  { path: "*", element: <Error404 /> },
  { path: "/", element: <MainLayout /> },
  { path: "/Authentication", element: <AuthWrapper />, children:[...AuthenticationRouter]},
  { path: "/userpanel", element: <UserLayout />, children:[...UserPanelRouter]},
]);

export { Routes };
