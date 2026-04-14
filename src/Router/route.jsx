import { createBrowserRouter } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import Layout from "../Layout/Layout";
import TimeLine from "../Page/TimeLine/TimeLine";
import Stats from "../Page/Stats/Stats";
import Home from "../Page/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
    {
      index:true , Component: Home
    },
    {
      path:"/timeline" , Component:TimeLine
    },
    {
      path:"/stats" , Component:Stats
    }
  
  ]
  },
]);

export default router