"use client";

import {
  Box,
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
import styles from "./houseKeepingOptions.module.css";
import ArrowDownIcon from "/public/icons/caring/arrowdown.svg";

const HouseKeepingOptions = () => {
  const theme = useTheme();
  return (
    <Card elevation={0} className={styles.card}>
      <CardContent style={{ paddingBottom: 16 }}>
        <FormControl style={{ display: "flex", flexDirection: "column" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            <Typography variant="overline" color={theme.palette.grey[500]}>
              انجام امور منزل توسط مراقب
            </Typography>
          </FormLabel>
          <RadioGroup defaultValue="female" name="radio-buttons-group">
            <FormControlLabel
              value="female"
              control={<Radio size="small" />}
              className={styles.radioLabel}
              label={
                <Typography variant="overline">
                  خیر، امور منزل به عهده مراقب نیست.
                </Typography>
              }
            />
            <Divider style={{ width: "100%" }}></Divider>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <FormControlLabel
                value="male"
                className={styles.radioLabel}
                control={<Radio size="small" />}
                label={
                  <Typography variant="overline">
                    بله، امور منزل به عهده مراقب است.
                  </Typography>
                }
              />
              <Box display={"flex"} gap={1}>
                <Typography variant="caption" color={theme.palette.grey[500]}>
                  60متر
                </Typography>
                <ArrowDownIcon />
              </Box>
            </Box>
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default HouseKeepingOptions;
