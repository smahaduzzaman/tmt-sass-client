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
                element: <AddTask></AddTask>
            },
            {
                path: "/my-task",
                element: <MyTask></MyTask>
            },
            {
                path: "/edit-task/:id",
                element: <EditTask></EditTask>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/tasks`)
                        .then(res => res.json())
                        .then(data => data.find(task => task._id === params.id)
                        );
                }
            },
            {
                path: "/completed-task",
                element: <CompletedTask></CompletedTask>
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