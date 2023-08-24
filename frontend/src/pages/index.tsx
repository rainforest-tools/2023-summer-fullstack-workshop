import { Stack, Paper, Unstable_Grid2 as Grid, Input, Box } from "@mui/material"

const Home = () => {
  return (
    <>
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
      <Grid container spacing={2} textAlign="center" marginTop={4}>
        <Grid xs={2} md={6} xl={10}><Paper><Box paddingX={4} paddingY={3}>Item 1</Box></Paper></Grid>
        <Grid xs={10} md={6} xl={2}><Paper><Box paddingX={4} paddingY={3}>Item 2</Box></Paper></Grid>
        <Grid xs={10} md={6} xl={2}><Paper><Box paddingX={4} paddingY={3}>Item 3</Box></Paper></Grid>
        <Grid xs={2} md={6} xl={10}><Paper><Box paddingX={4} paddingY={3}>Item 4</Box></Paper></Grid>
        <Grid xs={12}><Input fullWidth /></Grid>
      </Grid>
    </>
  )
}

export default Home