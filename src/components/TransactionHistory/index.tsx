import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  BoxProps,
  Button,
  Paper,
  Stack,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import { useMemo } from "react";

interface transaction {
  time: string;
  amount: number;
  status: "Ongoing" | "Complete" | "Failed";
}

type TransactionStatusType = "Ongoing" | "Complete" | "Failed";

function timeToString(time: number): string {
  if (time < 60) {
    return Math.floor(time).toString() + "m ago";
  } else if (time < 1440) {
    const day = Math.floor(time / 60);

    return day.toString() + "h ago";
  } else {
    const day = Math.floor(time / 1440);

    return day.toString() + "d ago";
  }
}

function SelectOne(statuses: string[]): TransactionStatusType {
  const len = statuses.length;
  const res = Math.floor(Math.random() * len);

  return statuses[res] as TransactionStatusType;
}

function Generate() {
  const data: transaction[] = [];
  let timeSpan = 0;
  for (let i = 0; i < 7; i++) {
    timeSpan += Math.random() * 100;
    const time = timeToString(timeSpan);
    const amount = Math.floor((Math.random() - 0.5) * 1000);
    const status = SelectOne(["Ongoing", "Complete", "Failed"]);
    data.push({ time, amount, status });
  }

  return data;
}

// Styled components
const StyledPaper = styled(Paper)({
  position: "relative",
  padding: 16,
  borderRadius: 16,
});

const StyledChip = styled((props: TypographyProps) => (
  <Typography {...props} />
))(({ theme }) => ({
  borderRadius: "100px",
  background: "#1414140C",
  color: "#141414",
  padding: "4px 6px",
  ...theme.applyStyles("dark", {
    background: "#141414",
    color: "#747474",
  }),
}));

const StyledGradientBox = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    position: "absolute",
    bottom: -50,
    left: 0,
    width: "100%",
    height: "200px",
    background: "linear-gradient(transparent, white)",
    ...theme.applyStyles("dark", {
      background: "linear-gradient(transparent, #191919)",
    }),
  }),
);

const TransactionHistory = () => {
  const transHistory = useMemo(() => Generate(), []);

  return (
    <StyledPaper>
      <Stack gap={3}>
        <Typography>Recent Transactions</Typography>
        <Stack position="relative">
          {transHistory.map((transaction) => (
            <Stack
              direction="row"
              sx={{
                width: "100%",
                justifyContent: "space-between",
                py: "6px",
              }}
            >
              <Typography
                variant="h6"
                color="textSecondary"
                width="80px"
                textAlign="center"
              >
                {transaction.time}
              </Typography>
              <Typography
                variant="h6"
                flex={1}
                textAlign="center"
                color={transaction.amount > 0 ? "success" : "error"}
              >
                {transaction.amount + " $POI"}
              </Typography>
              <StyledChip
                variant="h6"
                color="#141414"
                width="80px"
                textAlign="center"
              >
                {transaction.status}
              </StyledChip>
              <KeyboardArrowRightOutlined />
            </Stack>
          ))}
          <StyledGradientBox />
        </Stack>
        <Button
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightOutlined />}
        >
          VIEW ALL HISTORY
        </Button>
      </Stack>
    </StyledPaper>
  );
};

export default TransactionHistory;
