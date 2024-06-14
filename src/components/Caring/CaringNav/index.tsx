"use client";

import { Box, IconButton } from "@mui/material";
import React from "react";
import BackIcon from "/public/icons/caring/back.svg";
import CancelIcon from "/public/icons/caring/cancel.svg";
import { useRouter } from "next/navigation";

const CaringNav = () => {
  const router = useRouter();
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <IconButton onClick={() => router.push("/")}>
        <BackIcon />
      </IconButton>
      <IconButton>
        <CancelIcon />
      </IconButton>
    </Box>
  );
};

export default CaringNav;
