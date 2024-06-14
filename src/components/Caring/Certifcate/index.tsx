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
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import styles from "./certificate.module.css";
import ArrowDownIcon from "/public/icons/caring/arrowdown.svg";
import BottomSheet from "./BottomSheet";
import usePersistData from "@/store/usePersistData";
import useCertificateStore from "./store/useCertificateStore";

export const options = [
  { value: 1, name: "دیپلم و زیر دیپلم" },
  { value: 2, name: "فوق دیپلم" },
  { value: 3, name: "لیسانس و بالاتر" },
];

const Certificate = () => {
  const theme = useTheme();

  const certificateStore = usePersistData(
    useCertificateStore,
    (state) => state
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    certificateStore?.setMustHaveCertificate(event.target.checked);
    if (event.target.checked === false) {
      certificateStore?.setCertificateSelected(-1);
    }
  };

  return (
    <>
      {certificateStore && (
        <>
          <Card elevation={0} className={styles.card}>
            <CardContent style={{ paddingBottom: 16 }}>
              <FormControl style={{ display: "flex", flexDirection: "column" }}>
                <FormLabel id="demo-radio-buttons-group-label">
                  <Typography
                    variant="overline"
                    color={theme.palette.grey[500]}
                  >
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
                    control={
                      <Checkbox
                        onChange={handleChange}
                        checked={certificateStore?.mustHaveCertificate}
                        size="small"
                      />
                    }
                    label={
                      <Typography variant="overline">
                        مراقب دارای تحصیلات باشد.
                      </Typography>
                    }
                  />
                  <Box display={"flex"} gap={1}>
                    <Typography
                      variant="caption"
                      color={theme.palette.grey[500]}
                    >
                      {
                        options.find(
                          (item) =>
                            item.value === certificateStore?.certificateSelected
                        )?.name
                      }
                    </Typography>
                    <ArrowDownIcon />
                  </Box>
                </Box>
              </FormControl>
            </CardContent>
          </Card>

          <BottomSheet />
        </>
      )}
    </>
  );
};

export default Certificate;
