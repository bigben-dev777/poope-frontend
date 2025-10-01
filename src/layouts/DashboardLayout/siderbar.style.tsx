import {
  ListItemIcon,
  ListItemIconProps,
  ListItemText,
  ListItemTextProps,
  Stack,
  StackProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

import { NavLink, NavLinkProps } from "react-router-dom";

export const StyledMainStack = styled((props: StackProps) => (
  <Stack {...props} />
))(() => ({
  width: "240px",
  height: "100vh",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "50px",
  padding: "24px",
}));

export const StyledLogoText = styled((props: TypographyProps) => (
  <Typography {...props} />
))(() => ({
  textTransform: "uppercase",
  fontSize: "30px",
}));

export const StyledSidebarButton = styled((props: NavLinkProps) => (
  <NavLink {...props} />
))(() => {
  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    textDecoration: "none",
    padding: "12px",
    gap: "12px",
    "& .MuiListItemIcon-root": {
      color: "#747474",
      transition: "0.4s ease-in-out",
    },
    "& .MuiListItemText-primary": {
      color: "#747474",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
      textTransform: "none",
      transition: "0.4s ease-in-out",
    },
    "&:hover": {
      "& .MuiListItemText-primary": {
        color: "white",
      },
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&.activated": {
      "& .MuiListItemText-primary": {
        color: "white",
      },
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  };
});

export const StyledSidebarIcon = styled((props: ListItemIconProps) => (
  <ListItemIcon {...props} />
))(() => {
  return {
    minWidth: "24px",
  };
});

export const StyledSidebarText = styled((props: ListItemTextProps) => (
  <ListItemText {...props} />
))(() => {
  return {};
});
