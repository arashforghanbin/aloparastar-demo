"use client";

import {
  Box,
  Card,
  CardContent,
  Checkbox,
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
import styles from "./certificate.module.css";
import ArrowDownIcon from "/public/icons/caring/arrowdown.svg";

const Certificate = () => {
  const theme = useTheme();
  return (
    <Card elevation={0} className={styles.card}>
      <CardContent style={{ paddingBottom: 16 }}>
        <FormControl style={{ display: "flex", flexDirection: "column" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            <Typography variant="overline" color={theme.palette.grey[500]}>
              تحصیلات و مدارک مراقب
            </Typography>
          </FormLabel>

          <FormControlLabel
            value="female"
            control={<Checkbox size="small" />}
            className={styles.radioLabel}
            label={
              <Typography variant="overline">
                مراقب دارای مدرک سالمندیاری باشد
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
              control={<Checkbox size="small" />}
              label={
                <Typography variant="overline">
                  مراقب دارای تحصیلات باشد.
                </Typography>
              }
            />
            <Box display={"flex"} gap={1}>
              <Typography variant="caption" color={theme.palette.grey[500]}>
                دیپلم
              </Typography>
              <ArrowDownIcon />
            </Box>
          </Box>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default Certificate;
