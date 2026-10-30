// import React from 'react'
import { RouterProvider } from "react-router-dom";
import { Routes } from "../../config/router/Router";
import { QueryClient, QueryClientProvider } from "react-query";

const AppProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions:{
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  // return <RouterProvider router={Routes} />;
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes} />
    </QueryClientProvider>
  )
};

export { AppProvider };
