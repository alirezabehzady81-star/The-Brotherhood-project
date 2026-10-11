// import React from 'react'
import { RouterProvider } from "react-router-dom";
import { AuthenticationRouter } from "../../config/router/Authentication.router";

const AppProvider = () => {
  return <RouterProvider router={AuthenticationRouter} />;
};

export { AppProvider };
