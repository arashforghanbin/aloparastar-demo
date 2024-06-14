import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./cards.module.css";
import BandageIcon from "/public/icons/home/Bandage.svg";
import EmergencyLightIcon from "/public/icons/home/EmergencyLight.svg";
import NurseIcon from "/public/icons/home/Nurse.svg";
import HeartRateIcon from "/public/icons/home/HeartRate.svg";

const Cards = () => {
  return (
    <Grid padding={2} container spacing={2}>
      <Grid item xs={6}>
        <Card elevation={0} className={styles.cards}>
          <CardActionArea className={styles.cards__action}>
            <CardContent className={styles.cards__action__content}>
              <BandageIcon />
              <Typography variant="body2">مراقبتی</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card elevation={0} className={styles.cards}>
          <CardActionArea className={styles.cards__action}>
            <CardContent className={styles.cards__action__content}>
              <EmergencyLightIcon />
              <Typography variant="body2">خدماتی</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card elevation={0} className={styles.cards}>
          <CardActionArea className={styles.cards__action}>
            <CardContent className={styles.cards__action__content}>
              <NurseIcon />
              <Typography variant="body2">پرستاری</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card elevation={0} className={styles.cards}>
          <CardActionArea className={styles.cards__action}>
            <CardContent className={styles.cards__action__content}>
              <HeartRateIcon />
              <Typography variant="body2">پزشکی</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
