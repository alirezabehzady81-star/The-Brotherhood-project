// import React from 'react'
import { RouterProvider } from "react-router-dom";
import { Routes } from "../../config/router/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const AppProvider = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
      },
    },
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routes} />;
      </QueryClientProvider>
    </Provider>
  );
};

export { AppProvider };
