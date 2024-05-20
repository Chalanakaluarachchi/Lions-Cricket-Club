import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/layouts/MainLayout";
import Home from "../src/pages/Home/Home";
import Coaches from "../src/pages/Coaches/Coaches";
import Classes from "../src/pages/Classes/Classes";
import Login from "../src/pages/user/Login";
import Register from "../src/pages/user/Register";
import About from "../src/pages/About/about";
import Event from "../src/pages/Event/Event";
import SingleClass from "../src/pages/Classes/SingleClass";
import DashboardLayout from "../src/layouts/DashboardLayout";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import StudentCP from "../src/pages/Dashboard/Student/StudentCP";
import EnrolledClasses from "../src/pages/Dashboard/Student/Enroll/EnrolledClasses";
import SelectedClass from "../src/pages/Dashboard/Student/SelectedClass";
import MyPaymentHistory from "../src/pages/Dashboard/Student/Payment/History/MyPaymentHistory";

import Payment from "../src/pages/Dashboard/Student/Payment/Payment";
import AsCoach from "../src/pages/Dashboard/Student/Apply/AsCoach";
import CoachCP from "../src/pages/Dashboard/Coach/CoachCP";
import AddClass from "../src/pages/Dashboard/Coach/AddClass";
import MyClasses from "../src/pages/Dashboard/Coach/MyClasses";
import PendingCourse from "../src/pages/Dashboard/Coach/PendingClass";

import UpdateUser from "../src/pages/Dashboard/Admin/users/UpdateUser";
import AdminHome from "../src/pages/Dashboard/Admin/AdminHome";
import ManageClasses from "../src/pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../src/pages/Dashboard/Admin/users/ManageUsers";
import ManageApplication from "../src/pages/Dashboard/Admin/Applications/ManageApplication";
import Contact from "../src/pages/Contact/Contact";
import FAQ from "../src/pages/Dashboard/Links/Faq";
import Browser from "../src/pages/Dashboard/Links/browser";
import ApprovedClass from "../src/pages/Dashboard/Coach/ApprovedCourse";







export const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        children: [
            {
                path: "/",
                element:<Home/>,
            },
            {
                path: "Coaches",
                element: <Coaches/>
            },
            {
                path: "classes",
                element: <Classes/>
            },

            {
                path: "about",
                element: <About/>
            },

            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path: "/register",
                element:<Register/>
            },

            {
                path: "/class/:id",
                element: <SingleClass/>,
                loader: ({ params }) => fetch(`http://localhost:3000/class/${params.id}`),
            },
            
            
           
        ]
        
    },

    {
        path: "/dashboard",
        element:<DashboardLayout/>,
        children: [
            {
            index: true,
            element: <Dashboard/>
            },
            {
                path: "student-cp",
                element: <StudentCP/>
            },
            {
                path: "enrolled-class",
                element: <EnrolledClasses/>
            },
            {
                path: "my-selected",
                element: <SelectedClass/>
            },
            {
                path: "my-payments",
                element: <MyPaymentHistory/>
            },
            {
                path: "apply-coach",
                element: <AsCoach/>
            },
            {
                path: "user/payment",
                element: <Payment/>
            }

          
/*student*/
/*coach*/
            ,{
                path: "coach-cp",
                element: <CoachCP/>
            }
            ,
            {
                path: "add-class",
                element: <AddClass/>
            },
            {
                path: "my-classes",
                element: <MyClasses/>
            },
            {
                path: "my-pending",
                element: <PendingCourse/>
            }
            ,
            {
                path: "my-approved",
                element: <ApprovedClass/>
            },

            /*admin*/
            {
                path: 'manage-users',
                element: <ManageUsers/>
            },
            {
                path: 'update-user/:id',
                element: <UpdateUser/>,
                loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
            },
            {
                path: 'admin-home',
                element: <AdminHome/>
            },
            {
                path: 'manage-class',
                element: <ManageClasses/>
            },
            {
                path: 'manage-application',
                element: <ManageApplication/>
            },
            /*links*/
            {
                path: "faq",
                element: <FAQ/>
            }
           ,
           {
            path: "browser",
            element: <Browser/>
            }
       
        ]
    },

    

    


    

   
]);