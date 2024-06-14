import { Box, IconButton } from "@mui/material";
import React from "react";
import BackIcon from "/public/icons/caring/back.svg";
import CancelIcon from "/public/icons/caring/cancel.svg";

const CaringNav = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <IconButton>
        <BackIcon />
      </IconButton>
      <IconButton>
        <CancelIcon />
      </IconButton>
    </Box>
  );
};

export default CaringNav;
