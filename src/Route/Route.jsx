import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Inbox from "../pages/Inbox"
import Group from "../pages/Group"
import Lesson from "../pages/Lesson"
import Task from "../pages/Task"
import App from "../App"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path: "inbox",
                element: <Inbox/>
            },
            {
                path: "group",
                element: <Group/>
            },
            {
                path: "lesson",
                element: <Lesson/>
            },
            {
                path: "task",
                element: <Task/>
            },
        ]
    }
])

export default router