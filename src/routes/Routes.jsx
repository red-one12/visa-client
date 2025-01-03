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
import ViewDetails from "../pages/ViewDetails";
import ErrorPage from "../pages/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allVisa',
        element: <AllVisa></AllVisa>,
        loader: ()=> fetch('http://localhost:5000/visa')
      },
      {
        path: '/addVisa',
        element: <AddVisa></AddVisa>
      },
      {
        path: '/myAddedVisa',
        element: <MyAddedVisa></MyAddedVisa>,
        loader: () => fetch('http://localhost:5000/visa')
      },
      {
        path: '/myVisaApplication',
        element: <MyVisaApplication></MyVisaApplication>,
        loader: ()=> fetch('http://localhost:5000/application'),
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
  },
  {
    path: '/viewDetails/:id',
    element: <ViewDetails></ViewDetails>,
    loader: ({params}) => fetch(`http://localhost:5000/visa/${params.id}`)
  }
]);


export default router;