import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AllTasks from "../components/AllTasks/AllTasks";
import AddTask from "../components/AddTasks/AddTasks";
import MyTask from "../components/MyTask/MyTask.js/MyTask";
import CompletedTask from "../components/CompletedTask/CompletedTask";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Layouts/Main";
import EditTask from "../components/EditTask/EditTask";
import PrivateRoute from "./PrivateRoute";
import Details from "../components/Details/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all-tasks",
                element: <AllTasks></AllTasks>
            },
            {
                path: "/add-task",
                // element: <AddTask></AddTask>
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: "/my-task",
                // element: <MyTask></MyTask>
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
            },
            {
                path: "/edit-task/:id",
                element: <EditTask></EditTask>,
                loader: ({ params }) => {
                    return fetch(`https://tmt-sass-server.vercel.app/tasks`)
                        .then(res => res.json())
                        .then(data => data.find(task => task._id === params.id)
                        );
                }
            },
            {
                path: "/completed-task",
                // element: <CompletedTask></CompletedTask>
                element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
            },
            {
                path: "/details",
                // element: <Details></Details>,
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;