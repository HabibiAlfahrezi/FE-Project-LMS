import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../pages/Dashboard"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        children: [
            {
                path: "inbox"
            }
        ]
    }
])

export default router