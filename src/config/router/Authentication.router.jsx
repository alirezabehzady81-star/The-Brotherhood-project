import { LogIn_Step1 } from "../../components/Layouts/AuthLayout/Login/LogIn_Step1";
import { LogIn_Step2 } from "../../components/Layouts/AuthLayout/Login/LogIn_Step2";
import { SingUp_Step1 } from "../../components/Layouts/AuthLayout/Singup/SingUp_Step1";
import { SingUp_Step2 } from "../../components/Layouts/AuthLayout/Singup/SingUp_Step2";
import { SingUp_Step3 } from "../../components/Layouts/AuthLayout/Singup/SingUp_Step3";

const AuthenticationRouter = [
  { path: "singUp/step1", element: <SingUp_Step1 /> },
  { path: "singUp/step2", element: <SingUp_Step2 /> },
  { path: "singUp/step3", element: <SingUp_Step3 /> },
  { path: "logIn/step1", element: <LogIn_Step1 /> },
  { path: "logIn/step2", element: <LogIn_Step2 /> },
];

export { AuthenticationRouter };
