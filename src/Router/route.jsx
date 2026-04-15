import { createBrowserRouter } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import Layout from "../Layout/Layout";
import TimeLine from "../Page/TimeLine/TimeLine";
import Stats from "../Page/Stats/Stats";
import Home from "../Page/Home/Home";
import CardDetails from "../Page/CardDetails/CardDetails";
import Error from "../Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "/home/:id", Component: CardDetails
      },
      {
        path: "/timeline", Component: TimeLine
      },
      {
        path: "/stats", Component: Stats
      }

    ]
  },
  {
    path: "*", Component: Error
  }
]);

export default router