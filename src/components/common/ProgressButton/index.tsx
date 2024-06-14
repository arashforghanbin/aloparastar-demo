import { Box, Button } from "@mui/material";
import React from "react";
import styles from "./progressButton.module.css";

const ProgressButton = () => {
  return (
    <Box
      display={"flex"}
      className={styles.nav}
      position={"fixed"}
      bottom={0}
      zIndex={3}
    >
      <Button fullWidth variant="contained">
        بعدی
      </Button>
    </Box>
  );
};

export default ProgressButton;
