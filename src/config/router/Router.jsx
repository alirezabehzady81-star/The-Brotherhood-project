import { createBrowserRouter } from "react-router-dom";
// import pages
import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout";
import { AuthWrapper } from "../../components/Layouts/AuthLayout/AuthWrapper";
import { AuthenticationRouter } from "./Authentication.router";

import { AuthenticationRouter } from "./Authentication.router";
import { UserPanelRouter } from "./UserPanel.router";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/Authentication",
    element: <AuthWrapper />,
    children: AuthenticationRouter,
  },
  {
    path: "/UserPanel",
    element: <UserPanel />,
    children: UserPanelRouter,
  },
]);

export { Routes };