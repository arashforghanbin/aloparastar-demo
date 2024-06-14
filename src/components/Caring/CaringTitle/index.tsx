import { Box, Typography } from "@mui/material";
import styles from "./caringTitle.module.css";

const CaringTitle = () => {
  return (
    <Box paddingTop={2} display={"flex"} alignItems={"center"} gap={1}>
      <Box className={styles.disc}></Box>
      <Typography
        className={styles.caringTitle}
        variant="subtitle1"
        fontWeight={"bold"}
        component={"h1"}
      >
        مشخصات مورد انتظار از مراقب
      </Typography>
    </Box>
  );
};

export default CaringTitle;
