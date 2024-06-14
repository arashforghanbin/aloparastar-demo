import React from "react";
import CaringNav from "./CaringNav";
import { Grid } from "@mui/material";
import CaringTitle from "./CaringTitle";
import CaringProgress from "./CaringProgress";
import GenderSelect from "./GenderSelect";
import HouseKeepingOptions from "./HouseKeepingOptions";
import Certificate from "./Certifcate";

const Caring = () => {
  return (
    <Grid container padding={2} paddingBottom={10} spacing={2}>
      <Grid item xs={12}>
        <CaringNav />
      </Grid>

      <Grid item xs={12}>
        <CaringTitle />
      </Grid>

      <Grid item xs={12}>
        <CaringProgress />
      </Grid>

      <Grid item xs={12}>
        <GenderSelect />
      </Grid>

      <Grid item xs={12}>
        <HouseKeepingOptions />
      </Grid>

      <Grid item xs={12}>
        <Certificate />
      </Grid>
    </Grid>
  );
};

export default Caring;
