import { LogIn_Step1 } from "../../components/Layouts/AuthLayout/Login/LogIn_Step1";
import { LogIn_Step2 } from "../../components/Layouts/AuthLayout/Login/LogIn_Step2";
import { SingUp_Step1 } from "../../components/Layouts/AuthLayout/Singup/SingUp_Step1";
import { SingUp_Step2 } from "../../components/Layouts/AuthLayout/Singup/SingUp_Step2";
import { SingUp_Step3 } from "../../components/Layouts/AuthLayout/Singup/SingUp_Step3";

import Dashboard from "../../components/Layouts/AuthLayout/UserPanel/Layout/Dashboard/Dashboard";
import UserProfile from "../../components/Layouts/AuthLayout/UserPanel/Layout/UserProfile/UserProfile";
import MyCourse from "../../components/Layouts/AuthLayout/UserPanel/Layout/MyCourse/MyCourse";
import UserPanel from "../../components/Layouts/AuthLayout/UserPanel/UserPanel";
import MyComments from "../../components/Layouts/AuthLayout/UserPanel/Layout/MyComments/MyComments";
import SecuritySetting from "../../components/Layouts/AuthLayout/UserPanel/Layout/SecuritySetting/SecuritySetting";
import MyFavorites from "../../components/Layouts/AuthLayout/UserPanel/Layout/MyFavorites/MyFavorites";
import MyReserveCourse from "../../components/Layouts/AuthLayout/UserPanel/Layout/MyReserveCourse/MyReserveCourse";

const AuthenticationRouter = [
  { path: "singUp/step1", element: <SingUp_Step1 /> },
  { path: "singUp/step2", element: <SingUp_Step2 /> },
  { path: "singUp/step3", element: <SingUp_Step3 /> },
  { path: "logIn/step1", element: <LogIn_Step1 /> },
  { path: "logIn/step2", element: <LogIn_Step2 /> },

  {
    path: "userpanel",
    element: <UserPanel />,
    children: [
      {path: "dashboard", element: <Dashboard />},
      {path: "userprofile", element: <UserProfile />},
      {path: "mycourse", element: <MyCourse />},
      {path: "myreservecourse", element: <MyReserveCourse />},
      {path: "mycomments", element: <MyComments />},
      {path: "myfavorites", element: <MyFavorites />},
      {path: "securitysetting", element: <SecuritySetting />},
    ],
  },
];

export { AuthenticationRouter };