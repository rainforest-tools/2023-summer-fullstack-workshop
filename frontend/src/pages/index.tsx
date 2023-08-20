import { Container, Stack, Paper, Unstable_Grid2 as Grid, Box } from "@mui/material"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Container>
      <Stack>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/photo">Photo</Link>

      </Stack>
      <h1>Home</h1>
      <Stack
        height="100px"
        border={1}
        spacing={1}
        direction="row"
        justifyContent="end"
        alignItems="center"
      >
        <Paper>Item 1</Paper>
        <Paper>Item 2</Paper>
        <Paper>Item 3</Paper>
      </Stack>
      <Grid container border={1} spacing={2} boxSizing="border-box">
        <Grid border={1} xs={6} textAlign="center">
          <Paper>
            Item 1
          </Paper>
        </Grid>
        <Grid border={1} xs={6} textAlign="center">
          <Paper>
            Item 2
          </Paper>
        </Grid>
        <Grid border={1} xs={3} textAlign="center"><Paper>Item 3</Paper></Grid>
        <Grid border={1} xs={9} textAlign="center"><Paper>Item 4</Paper></Grid>
      </Grid>
    </Container>

  )
}

export default Home