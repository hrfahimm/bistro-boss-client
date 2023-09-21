/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import About from "../Pages/About/About/About";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashbord from "../Layout/Dashbord";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import Pagenotfound from "../Pages/Shared/Pagenotfound";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import { UserHome } from "../Pages/DashBoard/UserHome/UserHome";
import Additem from "../Pages/DashBoard/Additem/Additem";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItem/ManageItems";
import Payment from "../Pages/DashBoard/Payment/Payment";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "menu",
                element: <Menu />,
            },
            {
                path: "order/:category",
                element: <Order />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "secret",
                element: (
                    <PrivateRoute>
                        <Secret></Secret>
                    </PrivateRoute>
                ),
            },
            {
                path: "*",
                element: <Pagenotfound />,
            },
        ],
    },
    {
        path: "dashboard",
        element: (
            <PrivateRoute>
                <Dashbord />
            </PrivateRoute>
        ),
        children: [
            //
            //
            //
            //------user----
            {
                path: "userhome",
                element: <UserHome />,
            },
            {
                path: "mycart",
                element: <MyCart />,
            },
            {
                path: "payment",
                element: <Payment />,
            },
            //
            //
            //
            //
            //-------ADMIN------
            {
                path: "adminhome",
                element: (
                    <AdminRoute>
                        <AdminHome />
                    </AdminRoute>
                ),
            },
            {
                path: "allusers",
                element: (
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
                ),
            },
            {
                path: "additem",
                element: (
                    <AdminRoute>
                        <Additem />
                    </AdminRoute>
                ),
            },
            {
                path: "manageitems",
                element: (
                    <AdminRoute>
                        <ManageItems />
                    </AdminRoute>
                ),
            },
        ],
    },
]);
