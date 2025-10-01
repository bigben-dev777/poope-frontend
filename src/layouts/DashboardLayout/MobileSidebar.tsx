import {
  CloseOutlined,
  Dashboard,
  LocalMallOutlined,
  LogoutOutlined,
  NotificationsOutlined,
  PersonPinOutlined,
  SettingsOutlined,
  SyncAlt,
} from "@mui/icons-material";

import { Logo } from "@/assets/Images";
import { useAppContext } from "@/contexts/AppContext";
import { alpha, Box, IconButton, ListItem, Stack } from "@mui/material";
import { useState } from "react";
import {
  StyledLogoText,
  StyledMainStack,
  StyledSidebarButton,
  StyledSidebarIcon,
  StyledSidebarText,
} from "./siderbar.style";

const icons = [
  <Dashboard />,
  <SyncAlt />,
  <LocalMallOutlined />,
  <NotificationsOutlined />,
  <SettingsOutlined />,
  <PersonPinOutlined />,
  <LogoutOutlined />,
];

const MobileSideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { isNavbarMenuClose, setNavbarClose } = useAppContext();

  const handleClose = () => setNavbarClose(true);
  const handleNavItemClick = (index: number) => {
    setActiveIndex(index);
    handleClose();
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "0px",
        left: isNavbarMenuClose ? "-1000px" : "0px",
        transition: "all .5s ease-in-out",
        background: "#1A1A1A",
        borderRight: "1px solid #000000",
      }}
    >
      <Box
        sx={(theme) => ({
          display: isNavbarMenuClose ? "none" : "block",
          position: "absolute",
          width: "5000px",
          height: "100vh",
          zIndex: "-1",
          background: alpha(theme.palette.background.default, 0.6),
        })}
      />
      <StyledMainStack component="div">
        <Stack direction="row" gap={1}>
          <Logo size={36} />
          <StyledLogoText variant="h3" color="white">
            Poope
          </StyledLogoText>
          <Stack flex={1} />
          <IconButton onClick={handleClose}>
            <CloseOutlined />
          </IconButton>
        </Stack>
        <Stack
          width="100%"
          height="100%"
          sx={{
            flexDirection: "column",
          }}
        >
          {[
            "Dashboard",
            "Transaction",
            "Market",
            "Notification",
            "Setting",
            "Support",
            "Sign out",
          ].map((item, index) => (
            <>
              <ListItem key={item} disablePadding>
                <StyledSidebarButton
                  to={`/${item.trim().toLowerCase()}`}
                  className={index === activeIndex ? "activated" : ""}
                  onClick={() => handleNavItemClick(index)}
                >
                  <StyledSidebarIcon>{icons[index]}</StyledSidebarIcon>
                  <StyledSidebarText primary={item} />
                </StyledSidebarButton>
              </ListItem>
              {item === "Setting" && <Stack flex={1} flexGrow={1} />}
            </>
          ))}
        </Stack>
      </StyledMainStack>
    </Box>
  );
};

export default MobileSideBar;
