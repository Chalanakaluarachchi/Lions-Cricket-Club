import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/layouts/MainLayout";
import Home from "../src/pages/Home/Home";
import Coaches from "../src/pages/Coaches/Coaches";
import Classes from "../src/pages/Classes/Classes";

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
            }
        ]
    },
]);