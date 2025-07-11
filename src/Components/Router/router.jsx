import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
        {
            index:true,
            Component:Home
        }
    ]
  },
  {
    path:'/login',
    Component:Login
  },
  {
    path:'/register',
    Component:Register
  }
]);