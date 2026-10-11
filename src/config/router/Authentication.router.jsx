import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../../components/Layouts/AuthLayout/AuthLayout";

const AuthenticationRouter = createBrowserRouter([
  { path: "/Authentication", element: <AuthLayout />, children: [] },
]);

export { AuthenticationRouter };
