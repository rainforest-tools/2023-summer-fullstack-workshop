import { createBrowserRouter } from "react-router-dom"
import { OperatorEnum } from "./api"
import Home from "./pages"
import Calculator from "./pages/Calculator"
import Photo from "./pages/Photo"
import Layout from "./layouts"

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/calculator',
        element: <Calculator count={0} op={OperatorEnum.MULTIPLY} />
      },
      {
        path: '/photo',
        element: <Photo />
      }
    ]
  },
]

const browserRouter = createBrowserRouter(routes)

export default browserRouter
