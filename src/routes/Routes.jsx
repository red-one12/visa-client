import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";
import { Children } from "react";
import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);


export default router;