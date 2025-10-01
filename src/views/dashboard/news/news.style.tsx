import {
  Box,
  Paper,
  PaperProps,
  Stack,
  StackProps,
  styled,
  Typography,
} from "@mui/material";

// Styled Components
export const Section = styled(Box)(({ theme }) => ({
  padding: "60px 24px 60px 0px",
  width: "full",
  [theme.breakpoints.down("md")]: {
    padding: "30px 0px",
  },
}));

export const StyledPaper = styled((props: PaperProps) => <Paper {...props} />)(
  ({ theme }) => ({
    display: "flex",
    borderRadius: "8px",
    border: "1px solid #747474",
    height: "100px",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: "24px",
    [theme.breakpoints.down("md")]: {
      height: "fit-content",
      alignItems: "center",
    },
  }),
);

export const RowStack = styled((props: StackProps) => <Stack {...props} />)(
  ({ theme }) => ({
    flexDirection: "row",
    alignItems: "center",
    gap: "24px",
    padding: "8px 24px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }),
);

export const GrowStack = styled(Stack)({
  flexGrow: 1,
  gap: "8px",
});

export const TitleTypography = styled(Typography)({
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "20px",
  "& strong": {
    color: "#ffd258",
  },
});

export const DescTypography = styled(Typography)({
  fontWeight: 400,
  fontSize: "10px !important",
  lineHeight: "12px",
});
