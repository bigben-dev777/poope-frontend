import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Stack } from "@mui/material";

import Loading from "@/pages/Loading";
import Header from "./header";
import MobileSideBar from "./MobileSidebar";
import SideBar from "./sidebar";

const DashboardLayout = () => {
  return (
    <Stack
      sx={(theme) => ({
        flexDirection: { xs: "row" },
        minHeight: "100vh",
        backgroundImage: 'url("./assets/bg-pattern.svg")',
        backgroundColor: "#F2DDC3",
        ...theme.applyStyles("dark", {
          backgroundColor: "#101010 !important",
        }),
        [theme.breakpoints.down("md")]: {
          backgroundImage: "none",
        },
      })}
    >
      <SideBar />
      <Stack flex={1}>
        <Header />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Stack>
      <MobileSideBar />
    </Stack>
  );
};

export default DashboardLayout;
