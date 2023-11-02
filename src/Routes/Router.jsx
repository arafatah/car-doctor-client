import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import CheckOut from "../Page/CheckOut/CheckOut";
import Bookings from "../Page/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
      }
    ],
  },
]);

export default Router;
