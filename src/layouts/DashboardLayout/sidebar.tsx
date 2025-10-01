import {
  Dashboard,
  LocalMallOutlined,
  LogoutOutlined,
  NotificationsOutlined,
  PersonPinOutlined,
  SettingsOutlined,
  SyncAlt,
} from "@mui/icons-material";

import { Logo } from "@/assets/Images";
import { Box, ListItem, Stack } from "@mui/material";
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

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        background: "#1A1A1A",
        borderRight: "1px solid #000000",
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <StyledMainStack component="div">
        <Stack direction="row" gap={1}>
          <Logo size={36} />
          <StyledLogoText variant="h3" color="white">
            Poope
          </StyledLogoText>
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
                  onClick={() => setActiveIndex(index)}
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

export default SideBar;
