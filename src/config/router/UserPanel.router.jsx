import Dashboard from "../../components/Layouts/UserLayout/UserPanel/Layout/Dashboard/Dashboard";
import MyComments from "../../components/Layouts/UserLayout/UserPanel/Layout/MyComments/MyComments";
import MyCourses from "../../components/Layouts/UserLayout/UserPanel/Layout/MyCourses/MyCourses";
import MyFavorites from "../../components/Layouts/UserLayout/UserPanel/Layout/MyFavorites/MyFavorites";
import MyReserveCourse from "../../components/Layouts/UserLayout/UserPanel/Layout/MyReserveCourse/MyReserveCourse";
import SecuritySetting from "../../components/Layouts/UserLayout/UserPanel/Layout/SecuritySetting/SecuritySetting";
import UserProfile from "../../components/Layouts/UserLayout/UserPanel/Layout/UserProfile/UserProfile";




const UserPanelRouter = [
    {path: "dashboard", element: <Dashboard />},
    {path: "userprofile", element: <UserProfile />},
    {path: "mycourses", element: <MyCourses />},
    {path: "myreservecourse", element: <MyReserveCourse />},
    {path: "mycomments", element: <MyComments />},
    {path: "myfavorites", element: <MyFavorites />},
    {path: "securitysetting", element: <SecuritySetting />},
];

export { UserPanelRouter };