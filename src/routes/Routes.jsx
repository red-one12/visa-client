import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddVisa from "../pages/AddVisa";
import AllVisa from "../pages/AllVisa";
import MyAddedVisa from "../pages/MyAddedVisa";
import MyVisaApplication from "../pages/MyVisaApplication";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allVisa',
        element: <AllVisa></AllVisa>
      },
      {
        path: '/addVisa',
        element: <AddVisa></AddVisa>
      },
      {
        path: '/myAddedVisa',
        element: <MyAddedVisa></MyAddedVisa>
      },
      {
        path: '/myVisaApplication',
        element: <MyVisaApplication></MyVisaApplication>
      }

    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);


export default router;