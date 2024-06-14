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
import React, { useState } from "react";
import styles from "./houseKeepingOptions.module.css";
import ArrowDownIcon from "/public/icons/caring/arrowdown.svg";
import usePersistData from "@/store/usePersistData";
import useHouseKeepingStore from "./store/useHouseKeepingStore";
import BottomSheet from "./BottomSheet";

export const options = [
  { value: 1, name: "منزل زیر ۶۰ متر" },
  { value: 2, name: "منزل ۹۰-۶۰ متر" },
  { value: 3, name: "منزل ۱۲۰-۹۰ متر" },
  { value: 4, name: "بالای ۱۲۰ متر" },
];

const HouseKeepingOptions = () => {
  const theme = useTheme();

  const houseKeepingStore = usePersistData(
    useHouseKeepingStore,
    (state) => state
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    houseKeepingStore?.setHouseKeeping(
      (event.target as HTMLInputElement).value
    );
    if ((event.target as HTMLInputElement).value === "false") {
      houseKeepingStore?.setMeterSelected(-1);
    }
  };

  return (
    <>
      {houseKeepingStore && (
        <>
          <Card elevation={0} className={styles.card}>
            <CardContent style={{ paddingBottom: 16 }}>
              <FormControl style={{ display: "flex", flexDirection: "column" }}>
                <FormLabel id="housekeeping">
                  <Typography
                    variant="overline"
                    color={theme.palette.grey[500]}
                  >
                    انجام امور منزل توسط مراقب
                  </Typography>
                </FormLabel>
                <RadioGroup
                  value={houseKeepingStore?.houseKeeping}
                  onChange={handleChange}
                  name="housekeeping"
                >
                  <FormControlLabel
                    value="false"
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
                      value="true"
                      onClick={() => houseKeepingStore?.setMeterSelected(-1)}
                      className={styles.radioLabel}
                      control={<Radio size="small" />}
                      label={
                        <Typography variant="overline">
                          بله، امور منزل به عهده مراقب است.
                        </Typography>
                      }
                    />
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <Typography
                        variant="overline"
                        color={theme.palette.grey[500]}
                      >
                        {houseKeepingStore?.houseKeeping === "true" &&
                          options.find(
                            (item) =>
                              item.value === houseKeepingStore?.meterSelected
                          )?.name}
                      </Typography>
                      <ArrowDownIcon />
                    </Box>
                  </Box>
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
          <BottomSheet />
        </>
      )}
    </>
  );
};

export default HouseKeepingOptions;
