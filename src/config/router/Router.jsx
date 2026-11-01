import { createBrowserRouter } from "react-router-dom";
// import pages
import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout";
import { AuthWrapper } from "../../components/Layouts/AuthLayout/AuthWrapper";
import { AuthenticationRouter } from "./Authentication.router";
import { CoursesPage } from "./../../pages/CoursesPage/CoursesPage";
import { CourseItem } from "../../pages/CoursesPage/components/CourseItem/CourseItem";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/Authentication",
    element: <AuthWrapper />,
    children: [...AuthenticationRouter],
  },
  {
    path: "/courses",
    element: <CoursesPage />,
    children: [
      {
        path: "/courses",
        element: <CourseItem />,
      },
    ],
  },
]);

export { Routes };
