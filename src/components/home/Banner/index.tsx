"use client";

import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import styles from "./banner.module.css";
import React from "react";

const Banner = () => {
  const theme = useTheme();
  return (
    <Box position={"relative"} padding={2}>
      <Image
        src={"/images/home/Rectangle.png"}
        width={0}
        height={0}
        alt=""
        style={{ width: "100%", height: "auto" }}
        unoptimized
      />
      <Box
        color={theme.palette.common.white}
        className={styles.banner}
        position={"absolute"}
        top={0}
        right={0}
      >
        <Typography className={styles.banner__title}>سلامت اول</Typography>
        <Typography className={styles.banner__desc}>
          اولین سامانه خدمات پرستاری در ایران
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
