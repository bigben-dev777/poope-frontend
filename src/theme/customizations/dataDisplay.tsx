import { Components, Theme } from "@mui/material/styles";

export const dataDisplayCustomizations: Components<Theme> = {
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        variants: [
          {
            props: {
              variant: "h2",
            },
            style: {
              [theme.breakpoints.down("lg")]: {
                fontSize: "60px",
              },
              [theme.breakpoints.down("md")]: {
                fontSize: "40px",
              },
            },
          },
          {
            props: {
              variant: "h3",
            },
            style: {},
          },
          {
            props: {
              variant: "h4",
            },
            style: {},
          },
          {
            props: {
              variant: "h5",
            },
            style: {},
          },
          {
            props: {
              variant: "h6",
            },
            style: {},
          },
          {
            props: {
              variant: "subtitle1",
            },
            style: {},
          },
          {
            props: {
              variant: "subtitle2",
            },
            style: {},
          },
          {
            props: {
              variant: "body1",
            },
            style: {
              [theme.breakpoints.down("lg")]: {
                fontSize: "20px",
              },
            },
          },
          {
            props: {
              variant: "body2",
            },
            style: {},
          },
          {
            props: {
              variant: "button",
            },
            style: {},
          },
          {
            props: {
              color: "textHighlight",
            },
            style: {
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#141414",
              ...theme.applyStyles("dark", {
                WebkitTextStrokeColor: "#ffd258",
              }),
            },
          },
        ],
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: () => ({
        variants: [
          {
            props: {
              color: "success",
            },
            style: {
              border: "1px solid border: 1px solid hsla(152, 61%, 46%, 1)",
              background: "hsla(152, 61%, 46%, 0.08)",
            },
          },
        ],
      }),
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        background: "white",
        ...theme.applyStyles("dark", {
          background: "#1F1F1F",
        }),
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: () => ({
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 2.5,
        border: "none",
        textOverflow: "ellipsis",
        minWidth: "70px",
        overflow: "hidden",
      }),
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& th": {
          padding: "4px 16px",
          color: "#6A6A6A",
        },
        "& .MuiTableRow-root": {
          background: "#fff !important",
        },
        ...theme.applyStyles("dark", {
          "& .MuiTableRow-root": {
            background: "#1F1F1F !important",
          },
        }),
      }),
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&:nth-child(odd)": {
          background: "#FAF7F4",
        },
        ...theme.applyStyles("dark", {
          "&:nth-child(odd)": {
            background: "#191919",
          },
        }),
      }),
    },
  },
};
