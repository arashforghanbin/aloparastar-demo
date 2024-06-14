"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import styles from "./quickRequest.module.css";
import Image from "next/image";

const QuickRequest = () => {
  const theme = useTheme();

  return (
    <Box display={"flex"} gap={2} padding={2} paddingTop={1}>
      <Box display={"flex"} flex={1} flexDirection={"column"} gap={2}>
        <Card elevation={0} className={styles.cards}>
          <CardActionArea className={styles.cards__action}>
            <CardContent className={styles.cards__action__content}>
              <Image
                src={"/images/home/pic.png"}
                alt=""
                width={44}
                height={44}
              />
              <Typography variant="body2">پرستار سالمند</Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card elevation={0} className={styles.cards}>
          <CardActionArea className={styles.cards__action}>
            <CardContent className={styles.cards__action__content}>
              <Image
                src={"/images/home/pic1.png"}
                alt=""
                width={44}
                height={44}
              />
              <Typography variant="body2">پرستار کودک</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      <Box flex={1}>
        <Card elevation={0} className={styles.cards}>
          <CardActionArea className={styles.cards__action}>
            <CardContent className={styles.cards__action__content2}>
              <Typography variant="body2">مشاوره رایگان</Typography>
              <Typography color={theme.palette.grey[500]} variant="caption">
                با ۱۵۲۷ مشاوره رایگان در تمامی ساعات روز از الوپرستار
              </Typography>
              <Image
                src={"/images/home/pic2.png"}
                alt=""
                width={44}
                height={44}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default QuickRequest;
