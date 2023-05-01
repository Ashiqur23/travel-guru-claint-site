import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Layout/Header";
import Home from "../components/Layout/Home";
import Login from "../components/Login/Login";
import MainNav from "../components/Layout/MainNav";
import HeaderNav from "../components/Layout/HeaderNav";
import Contact from "../components/Layout/Contact";
import Place from "../components/Layout/Place";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
        {
            path:'/',
            element:<HeaderNav></HeaderNav>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/place/:id',
            element:<Place></Place>,
            loader: ({params})=> fetch(`https://travel-guru-server-site.vercel.app/card/${params.id}`)
        }
    ]
  },
]);
export default router;
