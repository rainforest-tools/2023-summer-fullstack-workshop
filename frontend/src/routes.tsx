import { createBrowserRouter } from "react-router-dom";
import Home from "./pages";
import Calculator from "./components/calculator";
import Photo from "./components/photo";

const router = createBrowserRouter([
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
])

export default router;