import { Components, Theme } from "@mui/material/styles";
import { brown, gray } from "../themePrimitives";

export const inputsCustomizations: Components<Theme> = {
  MuiButtonBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: {
              color: "primary",
            },
            style: {
              borderRadius: "1000px",
              color: gray[900],
              backgroundColor: brown[400],
              border: `1px solid ${gray[900]}`,
              "&:hover": {
                backgroundColor: brown[700],
              },
              ...theme.applyStyles("dark", {
                border: `1px solid white`,
              }),
            },
          },
        ],
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        variants: [
          {
            props: {
              size: "large",
            },
            style: {
              padding: "16px 32px",
              fontSize: "18px",
              lineHeight: "24px",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            },
          },
          {
            props: {
              color: "primary",
              variant: "contained",
            },
            style: {
              borderRadius: "1000px",
              color: gray[900],
              backgroundColor: brown[400],
              border: `1px solid ${gray[900]}`,
              "&:hover": {
                backgroundColor: brown[700],
              },
              ...theme.applyStyles("dark", {
                border: `1px solid white`,
              }),
            },
          },
          {
            props: {
              color: "secondary",
              variant: "contained",
            },
            style: {
              borderRadius: "1000px",
              color: gray[900],
              backgroundColor: "white",
              border: `1px solid ${gray[900]}`,
              "&:hover": {
                backgroundColor: gray[50],
              },
              ...theme.applyStyles("dark", {
                border: `1px solid white`,
              }),
            },
          },
          {
            props: {
              variant: "outlined",
            },
            style: {
              border: "1px solid #141414",
              color: "#141414",
              borderRadius: "100px",
              ...theme.applyStyles("dark", {
                borderColor: "white",
                color: "white",
              }),
            },
          },
          {
            props: {
              variant: "contained",
              color: "inherit",
            },
            style: {
              background: "white",
              ...theme.applyStyles("dark", {
                background: "#191919",
              }),
            },
          },
          {
            props: {
              variant: "text",
              color: "inherit",
            },
            style: {
              color: "#141414",
              ...theme.applyStyles("dark", {
                color: "#fff",
              }),
            },
          },
        ],
      }),
    },
  },
};
