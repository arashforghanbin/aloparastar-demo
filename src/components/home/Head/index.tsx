"use client";

import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import styles from "./head.module.css";
import Image from "next/image";
import MenuIcon from "/public/icons/home/menu.svg";
import UserIcon from "/public/icons/home/user.svg";

const Head = () => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      minHeight={200}
      position={"relative"}
      className={styles.head}
    >
      <Image
        className={styles.head__image}
        width={0}
        height={0}
        style={{
          width: "auto",
          height: "100%",
          position: "absolute",
          left: 0,
        }}
        src="wave.svg"
        alt=""
      />

      <Box padding={1} display={"flex"} justifyContent={"space-between"}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <IconButton>
          <UserIcon />
        </IconButton>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} padding={2}>
        <Box display="flex" flexDirection={"column"} gap={1}>
          <Typography
            variant="h5"
            component={"h1"}
            fontWeight={"bold"}
            color={theme.palette.common.white}
          >
            خوش اومدی!
          </Typography>
          <Typography
            variant="body1"
            component={"h2"}
            color={theme.palette.common.white}
          >
            مریم عزیز
          </Typography>
        </Box>
        <Box
          alignItems={"flex-end"}
          display="flex"
          flexDirection={"column"}
          gap={1}
        >
          <Typography
            variant="body2"
            component={"h2"}
            color={theme.palette.common.white}
          >
            افزایش موجودی
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Typography
              variant="h6"
              component={"h2"}
              color={theme.palette.common.white}
            >
              ۱۲٬۴۵۶٬۰۰۰{" "}
            </Typography>
            <Typography
              variant="body2"
              component={"h2"}
              color={theme.palette.common.white}
            >
              تومان
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Head;
