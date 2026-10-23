import { createBrowserRouter } from "react-router-dom";
// import pages
import { MainLayout } from "../../components/Layouts/MainLayout/MainLayout";
import { AuthWrapper } from "../../components/Layouts/AuthLayout/AuthWrapper";
import { AuthenticationRouter } from "./Authentication.router";
import { CoursesPage } from "./../../pages/CoursesPage/CoursesPage";
import { CorsesHeroSection } from "../../components/partials/heroSections/CorsesHeroSection/CorsesHeroSection";

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
    children: [{ path: "/courses", element: <CorsesHeroSection /> }],
  },
]);

export { Routes };
