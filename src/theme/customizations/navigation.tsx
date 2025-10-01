import { Components, Theme } from "@mui/material/styles";
import { colorSchemes } from "../themePrimitives";

const lightTheme = colorSchemes.light.palette;
const darkTheme = colorSchemes.dark.palette;

export const navigation: Components<Theme> = {
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontFamily: "Inter",
        textDecoration: "none", // Remove underline
        cursor: "pointer",
        variants: [
          {
            props: {
              color: "primary",
            },
            style: {
              color: lightTheme.text.primary,
              "&:hover": {
                color: lightTheme.text.secondary,
              },
              ...theme.applyStyles("dark", {
                color: darkTheme.text.primary,
                "&:hover": {
                  color: darkTheme.text.secondary,
                },
              }),
            },
          },
        ],
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: () => ({
        background: "transparent",
      }),
      indicator: ({ theme }) => ({
        left: 0,
        width: "4px",
        background: theme.palette.text.primary,
      }),
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: "16px",
        lineHeight: "24px",
        textTransform: "none",
        textAlign: "left",
        justifyContent: "flex-start !important",
        color: theme.palette.text.secondary,
        minHeight: "48px",
        "&.Mui-selected": {
          color: theme.palette.text.primary,
        },
        ...theme.applyStyles("dark", {
          color: theme.palette.text.secondary,
        }),
      }),
    },
  },
};
