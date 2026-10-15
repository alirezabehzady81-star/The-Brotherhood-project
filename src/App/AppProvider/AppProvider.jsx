// import React from 'react'
import { RouterProvider } from "react-router-dom";
import { Routes } from "../../config/router/Router";

const AppProvider = () => {
  return <RouterProvider router={Routes} />;
};

export { AppProvider };
