import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom"
import Links from "../components/Links";

const Layout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" mr={2}>Frontend Demo</Typography>
          <Links />
        </Toolbar>
      </AppBar>
      <Container>
        <Box paddingTop={8}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}

export default Layout