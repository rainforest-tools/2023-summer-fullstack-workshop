import { Container, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom"

const Layout = () => {

  return (
    <Container>
      <Stack>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/photo">Photo</Link>
      </Stack>
      <Outlet />
    </Container>
  )
};

export default Layout;