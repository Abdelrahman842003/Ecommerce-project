import React from "react";
import Header1 from "./Header/header1/Header1";
import Header2 from "./Header/header2/Header2";
import Header3 from "./Header/header3/Header3";
import { Box, useTheme } from "@mui/material";
import Hero from "./HeroSection/Hero";
import IconSection from "./HeroSection/IconSection";
import Footer from "./footer/Footer";
import Main from "./Main/Main";

export default function Page1() {
  const theme=useTheme()
  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />
      <Box sx={{ background: theme.palette.background.main }}>
        <Hero />
        <IconSection />
      </Box>
      <Main />
      <Footer />
    </>
  );
}
