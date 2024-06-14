"use client";

import Rtl from "@/components/wrappers/RTLWrapper";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { ReactElement } from "react";

interface HomeLayoutType {
  children: ReactElement | ReactElement[];
}

const theme = createTheme({
  typography: {
    fontFamily: "IRANSansWeb",
  },
  direction: "rtl",
});

const HomeLayout = ({ children }: HomeLayoutType) => {
  return (
    <Rtl>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Rtl>
  );
};

export default HomeLayout;
