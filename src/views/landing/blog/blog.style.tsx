import { Grid, Stack, styled, Typography } from "@mui/material";

export const BlogStack = styled(Stack)(() => ({
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
}));

export const BlogGrid = styled(Grid)({
  my: { xs: 3, md: 6.125 },
  columnGap: 3,
  overflowX: "scroll",
  maxWidth: "1440px",
  width: "100%",
  gap: "50px",
  justifyContent: "space-evenly",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const CenteredTypography = styled(Typography)(() => ({
  textAlign: "center",
}));
