import {
  Box,
  Button,
  ButtonProps,
  Stack,
  StackProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

export const Section = styled(Box)({
  // No extra styles, just semantic
});

export const MainStack = styled((props: StackProps) => <Stack {...props} />)(
  ({ theme }) => ({
    gap: "24px",
    padding: "60px 24px 30px 60px",
    [theme.breakpoints.down("xl")]: {
      padding: "0px",
    },
  }),
);

export const RowStack = styled((props: StackProps) => <Stack {...props} />)(
  ({ theme }) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "14px",
    },
  }),
);

export const BalanceTypography = styled(Typography)({
  fontSize: "32px",
  fontWeight: "400",
  lineHeight: "100%",
  "& strong": {
    fontSize: "60px",
    fontWeight: "400",
  },
});

export const AmountTypography = styled((props: TypographyProps) => (
  <Typography {...props} />
))(({ theme }) => ({
  textAlign: "right",
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "100%",
  color: "#747474",
  [theme.breakpoints.down("lg")]: {
    textAlign: "left",
  },
}));

export const BalanceRowStack = styled((props: StackProps) => (
  <Stack {...props} />
))(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

export const BalanceItemsStack = styled((props: StackProps) => (
  <Stack {...props} />
))(({ theme }) => ({
  flexDirection: "row",
  gap: "32px",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "space-evenly",
  },
}));

export const BalanceItemTypography = styled(Typography)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const ControlPanelStack = styled((props: StackProps) => (
  <Stack {...props} />
))(({ theme }) => ({
  flexDirection: "row",
  gap: "24px",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "space-evenly",
  },
}));

export const ControlPanelItemStack = styled(Stack)({
  alignItems: "center",
});

export const ControlPanelButton = styled((props: ButtonProps) => (
  <Button {...props} />
))(({ theme }) => ({
  minWidth: "48px",
  width: "48px",
  height: "48px",
  color: "white",
  background: "#141414",
  border: "2px solid white",
  borderRadius: "1000px",
  ...theme.applyStyles("dark", {
    background: "#747474",
    borderColor: "#747474",
  }),
}));
