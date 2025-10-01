import { Stack, styled } from "@mui/material";

export const StyledMainStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  padding: "50px 20px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    padding: "150px 0px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "150px 0px",
  },
}));

export const StyledLeftStack = styled(Stack)({
  flex: 1,
  gap: "50px",
});

export const StyledButtonStack = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  "@media (min-width: 900px)": {
    flexDirection: "row",
  },
});

export const StyledImgStack = styled(Stack)({
  flex: 1,
});

export const StyledImg = styled("img")({
  width: "90%",
  height: "90%",
  objectFit: "contain",
});
