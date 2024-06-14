import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import HomeIcon from "/public/icons/common/home.svg";
import ContractsIcon from "/public/icons/common/contracts.svg";
import RequestsIcon from "/public/icons/common/requests.svg";
import MoreIcon from "/public/icons/common/more.svg";
import styles from "./bottomNav.module.css";

const BottomNav = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      className={styles.nav}
      position={"fixed"}
      bottom={0}
      zIndex={3}
    >
      <IconButton className={styles.nav__button}>
        <HomeIcon />
        <Typography variant="body2">خانه</Typography>
      </IconButton>
      <IconButton className={styles.nav__button}>
        <RequestsIcon />
        <Typography color={theme.palette.grey[500]} variant="body2">
          درخواست‌ها
        </Typography>
      </IconButton>
      <IconButton className={styles.nav__button}>
        <ContractsIcon />
        <Typography color={theme.palette.grey[500]} variant="body2">
          قرارداد‌‌ها
        </Typography>
      </IconButton>
      <IconButton className={styles.nav__button}>
        <MoreIcon />
        <Typography color={theme.palette.grey[500]} variant="body2">
          بیشتر
        </Typography>
      </IconButton>
    </Box>
  );
};

export default BottomNav;
