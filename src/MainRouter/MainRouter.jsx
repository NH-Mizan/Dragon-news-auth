import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Home from '../Components/Home';
import News from '../Components/News';
import Categorynews from '../Components/Categorynews';
import AuthLayout from '../Components/AuthLayout';
import Login from '../Components/Login';
import Register from '../Components/Register';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path:"",
                element:<Navigate to={'/newsCategory/01'}></Navigate>
            },
            {
                path:'/newsCategory/:id',
                element:<Categorynews></Categorynews>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<News></News>
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>

            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/*',
        element:<h1>Error </h1>
    }
]);

const MainRouter = () => {
    return (
        <div>
            <RouterProvider router={router} />

        </div>
    );
};

export default MainRouter;