import React from "react";
import CaringNav from "./CaringNav";
import { Grid } from "@mui/material";
import CaringTitle from "./CaringTitle";
import CaringProgress from "./CaringProgress";

const Caring = () => {
  return (
    <Grid container padding={2} spacing={2}>
      <Grid item xs={12}>
        <CaringNav />
      </Grid>

      <Grid item xs={12}>
        <CaringTitle />
      </Grid>

      <Grid item xs={12}>
        <CaringProgress />
      </Grid>
    </Grid>
  );
};

export default Caring;
