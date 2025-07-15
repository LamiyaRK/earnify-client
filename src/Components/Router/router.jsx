import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Dashboard from "../Dashboard/Dashboard";
import { Component, use } from "react";
import PostTask from "../Dashboard/Buyer/PostTask";

import { AuthContext } from "../../Context/AuthContext";
import Mytasks from "../Dashboard/Buyer/Mytasks";
import UpdateTask from "../Dashboard/Buyer/UpdateTask";
import PurchaseCoin from "../Dashboard/Buyer/PurchaseCoin";

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
  },
  {
    path:'/dashboard',
    Component:Dashboard,
    children:[
      {
      path:'/dashboard/addtask',
      Component:PostTask
    },
    {
      path:'/dashboard/mytasks',
      
      Component:Mytasks
    },
    {
       path:'/dashboard/updatetask/:id',
      
      Component:UpdateTask
    },
     {
       path:'/dashboard/purchasecoin',
      
      Component:PurchaseCoin
    },

  ]
  }
]);