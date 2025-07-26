import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Dashboard from "../Dashboard/Dashboard";
import PostTask from "../Dashboard/Buyer/PostTask";
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
import Errorpage from "../Pages/Errorpage";
import { AdminRoute, BuyerRoute, WorkerRoute } from "./PrivateRoute";
import Unauthorized from "../Pages/Unauthorized";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/unauthorized",
    element: (
      <Unauthorized></Unauthorized>
    ),
  },
  {
    path: "/*",
    element: <Errorpage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // ✅ Buyer Routes
      {
        path: "/dashboard/addtask",
        element: (
          <BuyerRoute>
            <PostTask />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/mytasks",
        element: (
          <BuyerRoute>
            <Mytasks />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/updatetask/:id",
        element: (
          <BuyerRoute>
            <UpdateTask />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/purchasecoin",
        element: (
          <BuyerRoute>
            <PurchaseCoin />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/paymenthistory",
        element: (
          <BuyerRoute>
            <PaymentHistory />
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/buyerhome",
        element: (
          <BuyerRoute>
            <BuyerHome />
          </BuyerRoute>
        ),
      },

      // ✅ Worker Routes
      {
        path: "/dashboard/tasklist",
        element: (
          <WorkerRoute>
            <TaskList />
          </WorkerRoute>
        ),
      },
      {
        path: "/dashboard/tasklist/:id",
        element: (
          <WorkerRoute>
            <TaskDetails />
          </WorkerRoute>
        ),
      },
      {
        path: "/dashboard/mysubmissions",
        element: (
          <WorkerRoute>
            <MyTask />
          </WorkerRoute>
        ),
      },
      {
        path: "/dashboard/workerhome",
        element: (
          <WorkerRoute>
            <WorkerHome />
          </WorkerRoute>
        ),
      },
      {
        path: "/dashboard/withdraw",
        element: (
          <WorkerRoute>
            <Withdraw />
          </WorkerRoute>
        ),
      },

      // ✅ Admin Routes
      {
        path: "/dashboard/adminhome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managetasks",
        element: (
          <AdminRoute>
            <MangaeTask />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
