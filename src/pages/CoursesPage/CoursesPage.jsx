// import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/partials/Footer/Footer";
import { Header } from "../../components/partials/Header/Header";

const CoursesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      {/* corses page */}
      <div className="pt-7.5 pb-2.25 flex justify-center">
      <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export { CoursesPage };
