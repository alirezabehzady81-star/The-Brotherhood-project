import { createBrowserRouter } from "react-router-dom";
// import pages
import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout";
import {Landing} from "../../pages/Landing/Landing";
import ArticlesNews from "../../pages/Articles&News/Articles&News";
import { ArticleNewsDetails } from "../../pages/Articles&News/ArticlesNews and details/ArticleNewsDetails";
import UserProfile from "../../pages/Userprofile/UserProfile";
import { Profile } from "../../pages/Userprofile/Dashboard/Profile";
import MyCourses from "../../pages/Userprofile/Dashboard/MyCourses";
import Reserved from "../../pages/Userprofile/Dashboard/Reserved";
import Favorites from "../../pages/Userprofile/Dashboard/Favorites";
import Security from "../../pages/Userprofile/Dashboard/Security";
import Comments from "../../pages/Userprofile/Dashboard/Comments";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Landing /> }],
  },
    {
    path: "/ArticlesNews",
    element: <ArticlesNews/>,
  
  },
      {
    path: "/ArticlesNewsDetail",
    element: <ArticleNewsDetails/>,
  
  },
        {
    path: "/dashboard",
    element: <UserProfile/>,
    children: [
{ path: "/dashboard/profile", element: <Profile/> },
{ path: "/dashboard/my-courses", element: <MyCourses/> },
{ path: "/dashboard/reserved", element: <Profile/> },
{ path: "/dashboard/comments", element: <Comments/> },
{ path: "/dashboard/reserved", element: <Reserved/> },
{ path: "/dashboard/favorites", element: <Favorites/> },
{ path: "/dashboard/security", element: <Security/> },
    ],
  },
]);

export { Routes };
