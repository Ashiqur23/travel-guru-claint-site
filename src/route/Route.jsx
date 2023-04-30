import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Layout/Header";
import Home from "../components/Layout/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
