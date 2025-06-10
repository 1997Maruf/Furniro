import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createRoot } from "react-dom/client";


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from "./Provaicer/AuthProvider";
import React from "react";
import Root from "./Layout/Root";
import Home from "./Page/Home/Home";
import Shop from "./Page/Shop/Shop";
import ViewDetails from "./Page/ViewDetails/ViewDetails";
import Cart from "./Page/Cart/Cart";


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "shop",
        element: <Shop></Shop>
      },
      {
        path: "/details",
        element: <ViewDetails></ViewDetails>
      },
      {
        path: "/cart",
        element: <Cart></Cart>
      },
      
    ],

  },
  
]);
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
   </QueryClientProvider>
);