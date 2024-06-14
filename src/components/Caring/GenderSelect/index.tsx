"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import styles from "./genderSelect.module.css";

const GenderSelect = () => {
  const theme = useTheme();

  return (
    <>
      <Card elevation={0} className={styles.card}>
        <CardContent style={{ paddingBottom: 16 }}>
          <FormControl style={{ display: "flex", flexDirection: "column" }}>
            <FormLabel id="demo-radio-buttons-group-label">
              <Typography variant="overline" color={theme.palette.grey[500]}>
                جنسیت مراقب
              </Typography>
            </FormLabel>
            <RadioGroup defaultValue="female" name="radio-buttons-group">
              <FormControlLabel
                value="female"
                control={<Radio size="small" />}
                className={styles.radioLabel}
                label={<Typography variant="overline">خانم</Typography>}
              />
              <Divider style={{ width: "100%" }}></Divider>
              <FormControlLabel
                value="male"
                className={styles.radioLabel}
                control={<Radio size="small" />}
                label={<Typography variant="overline">اقا</Typography>}
              />
              <Divider></Divider>
              <FormControlLabel
                value="any"
                className={styles.radioLabel}
                control={<Radio size="small" />}
                label={<Typography variant="overline">فرقی ندارد</Typography>}
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </>
  );
};

export default GenderSelect;
