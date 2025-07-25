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
import PaymentHistory from "../Dashboard/Buyer/PaymentHistory";
import BuyerHome from "../Dashboard/Buyer/BuyerHome";
import TaskList from "../Dashboard/Worker/TaskList";
import TaskDetails from "../Dashboard/Worker/TaskDetails";

import MyTask from "../Dashboard/Worker/MyTask";
import AdminHome from "../Dashboard/Admin/AdminHome";
import MangaeTask from "../Dashboard/Admin/MangaeTask";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import WorkerHome from "../Dashboard/Worker/WorkerHome";
import Withdraw from "../Dashboard/Worker/Withdraw";

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
    {
       path:'/dashboard/paymenthistory',
      
      Component:PaymentHistory
    },
    {
       path:'/dashboard/buyerhome',
      
      Component:BuyerHome
    },
    {
      path:'/dashboard/tasklist',
      Component:TaskList
    },
    {
      path:'/dashboard/tasklist/:id',
      Component:TaskDetails
    },
    {
      path:'/dashboard/mysubmissions',
      Component:MyTask
    },
    {
      path:'/dashboard/adminhome',
      Component:AdminHome
    },
    {
      path:'/dashboard/managetasks',
      Component:MangaeTask
    },
    {
      path:'/dashboard/manageusers',
      Component:ManageUsers
    },
    {
      path:'/dashboard/workerhome',
      Component:WorkerHome
    },
    {
      path:'/dashboard/withdraw',
      Component:Withdraw
    },

  ]
  }
]);