import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Brand from './pages/Brand';
import Product from './pages/Product';
import ServiceClient from './pages/ServiceClient';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Page Not Found</h1>
  },

  {
    path: "/Brand",
    element: <Brand/>,
  },

  {
    path: "/Product",
    element: <Product/>,
  },

  {
    path: "/ServiceClient",
    element: <ServiceClient/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
