import { Components, Theme } from "@mui/material/styles";

export const surfaceCustomization: Components<Theme> = {
  MuiAccordion: {
    styleOverrides: {
      root: () => ({
        backgroundColor: "#ffffff00",
        boxShadow: "none",
        borderRadius: "12px !important",
        border: "1px solid #14141428",
        marginBottom: "16px",
        "&:before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: "0 0 16px 0",
          backgroundColor: "#ffd25820",
          borderColor: "#141414",
        },
      }),
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        backgroundColor: "#ffffff00",
        padding: "16px 24px",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        "&.Mui-expanded": {
          minHeight: "56px",
        },
      },
      content: {
        margin: "12px 0",
        "&.Mui-expanded": {
          margin: "12px 0",
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: "24px",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
};
