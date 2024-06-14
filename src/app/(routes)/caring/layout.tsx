"use client";

import ProgressButton from "@/components/common/ProgressButton";
import Rtl from "@/components/wrappers/RTLWrapper";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { ReactElement } from "react";

interface CaringLayout {
  children: ReactElement | ReactElement[];
}

const theme = createTheme({
  typography: {
    fontFamily: "IRANSansWeb",
  },
  direction: "rtl",
});

const HomeLayout = ({ children }: CaringLayout) => {
  return (
    <Rtl>
      <ThemeProvider theme={theme}>
        {children}
        <ProgressButton />
      </ThemeProvider>
    </Rtl>
  );
};

export default HomeLayout;
