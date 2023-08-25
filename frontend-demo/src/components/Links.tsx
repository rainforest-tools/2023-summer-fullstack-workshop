import { Stack } from "@mui/material"
import { routes } from "../routes"
import { Link } from "react-router-dom"

const Links = () => {
  return <Stack spacing={2} direction="row">{
    routes[0].children.map(({ path }) => <Link key={path} to={path}>{path === '/' ? 'Home'.toUpperCase() : path.replace('/', '').toUpperCase()}</Link>)
  }</Stack>
}

export default Links