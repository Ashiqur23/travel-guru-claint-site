import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Layout/Header";
import Home from "../components/Layout/Home";
import Login from "../components/Login/Login";
import MainNav from "../components/Layout/MainNav";
import HeaderNav from "../components/Layout/HeaderNav";
import Contact from "../components/Layout/Contact";
import Place from "../components/Layout/Place";
import Hotel from "../components/Layout/Hotel";
import Register from "../components/Layout/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <HeaderNav></HeaderNav>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/place/:id",
        element: <Place></Place>,
        loader: ({ params }) =>
          fetch(`https://travel-guru-server-site.vercel.app/card/${params.id}`),
      },
      {
        path: "/hotel/:id",
        element: (
          <PrivateRoute>
            <Hotel></Hotel>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://travel-guru-server-site.vercel.app/hotel/all`),
      },
    ],
  },
]);
export default router;
