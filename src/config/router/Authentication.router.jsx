import { createBrowserRouter } from "react-router-dom";
import { SingUpLayout } from "../../components/Layouts/AuthLayout/SingUp/SingUpLayout";
import { SingUp_Step1 } from "../../components/Layouts/AuthLayout/Singup/components/Singup_Step1";

const AuthenticationRouter = createBrowserRouter([
  { path: "/Authentication", element: <SingUpLayout />, children: [{path:"SingUp",element:<SingUp_Step1/>}] },
]);

export { AuthenticationRouter };
