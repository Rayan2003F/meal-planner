import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import Meals from './pages/Meals';
import ServiceClient from './pages/ServiceClient';
import Chatbot from "./pages/chatbot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Page Not Found</h1>
  },

  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },

  {
    path: "/Meals",
    element: <Meals/>,
  },

  {
    path: "/ServiceClient",
    element: <ServiceClient/>,
  },

  {
    path: "/Chatbot",
    element: <Chatbot/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
