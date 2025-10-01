import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import Loading from "@/pages/Loading";
import Footer from "./footer";
import Header from "./header";

const LandingLayout = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundImage: 'url("./assets/bg-pattern.svg")',
        backgroundColor: "#F2DDC3",
        ...theme.applyStyles("dark", {
          backgroundColor: "#141414",
        }),
      })}
    >
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Box>
  );
};

export default LandingLayout;
