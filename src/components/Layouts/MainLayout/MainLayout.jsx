// import React from 'react'
import { Outlet } from "react-router-dom";
// components import
import {Header} from "../../partials/Header/Header";
import { Footer } from "../../partials/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {/* pages information */}
      <Outlet />
      <Footer />
    </div>
  );
};

export { MainLayout };
