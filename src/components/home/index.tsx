import { Grid } from "@mui/material";
import React from "react";
import Head from "./Head";
import Cards from "./Cards";
import Banner from "./Banner";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Head />
      </Grid>

      <Grid item xs={12}>
        <Cards />
      </Grid>

      <Grid item xs={12}>
        <Banner />
      </Grid>
    </Grid>
  );
};

export default Home;
