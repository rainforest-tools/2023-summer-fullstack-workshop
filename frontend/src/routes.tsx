import { createBrowserRouter } from "react-router-dom";
import Home from "./pages";
import Calculator from "./components/calculator";
import Photo from "./components/photo";
import Layout from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/photo",
        element: <Photo />,
      }
    ]
  },
])

export default router;