"use client";

import { Box, LinearProgress, Typography, useTheme } from "@mui/material";
import styles from "./caringprogress.module.css";

const CaringProgress = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.grey[500]} variant="caption">
        مرحله 1 از 9
      </Typography>
      <LinearProgress
        className={styles.progressbar}
        style={{ borderRadius: 4, opacity: 0.5 }}
        variant="determinate"
        value={10}
      />
    </Box>
  );
};

export default CaringProgress;
