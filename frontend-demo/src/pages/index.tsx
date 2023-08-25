import { Stack, Box, Paper, Grid } from "@mui/material"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Stack
        mb={8}
        width="100%"
        spacing={8}
        border={1}
        height="100%"
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Box width="100%"><Paper><Box paddingX={4} paddingY={3}>item 1</Box></Paper></Box>
        <Box width="100%"><Paper><Box paddingX={4} paddingY={3}>item 2</Box></Paper></Box>
        <Box width="100%"><Paper><Box paddingX={4} paddingY={3}>item 3</Box></Paper></Box>
        {/* <Stack
            width="100%"
            spacing={4}
            border={1}
            height="100%"
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
          >
            <Paper><Box paddingX={4} paddingY={3}>item 1</Box></Paper>
            <Paper><Box paddingX={4} paddingY={3}>item 2</Box></Paper>
            <Paper><Box paddingX={4} paddingY={3}>item 3</Box></Paper>
          </Stack> */}
      </Stack>
      <Grid container border={1} spacing={{ sm: 2, md: 8 }} mb={8} columns={12}>
        <Grid xs={12} sm={6} lg={4}><Box border={1} paddingX={4} paddingY={3}>item 1</Box></Grid>
        <Grid xs={12} sm={6} lg={4}><Box border={1} paddingX={4} paddingY={3}>item 2</Box></Grid>
        <Grid xs={12} sm={6} lg={4}><Box border={1} paddingX={4} paddingY={3}>item 3</Box></Grid>
      </Grid>
    </>
  )
}

export default Home