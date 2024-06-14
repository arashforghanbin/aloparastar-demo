import { Grid } from "@mui/material";
import React from "react";
import Head from "./Head";
import Cards from "./Cards";
import Banner from "./Banner";
import QuickRequest from "./QuickRequest";

const Home = () => {
  return (
    <Grid container marginBottom={8}>
      <Grid item xs={12}>
        <Head />
      </Grid>

      <Grid item xs={12}>
        <Cards />
      </Grid>

      <Grid item xs={12}>
        <Banner />
      </Grid>

      <Grid item xs={12}>
        <QuickRequest />
      </Grid>
    </Grid>
  );
};

export default Home;
