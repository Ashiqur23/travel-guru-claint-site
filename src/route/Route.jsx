import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Layout/Header";
import Home from "../components/Layout/Home";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
        {
            path:'/login',
            element:<Login></Login>
        }
    ]
  },
]);
export default router;
