import { SingUp_Step1 } from "../../components/Layouts/AuthLayout/Singup/SingUp_Step1";
import { SingUp_Step2 } from "../../components/Layouts/AuthLayout/Singup/SingUp_Step2";

const AuthenticationRouter = [
  { path: "singUp/step1", element: <SingUp_Step1 /> },
  { path: "singUp/step2", element: <SingUp_Step2 /> },
];

export { AuthenticationRouter };
