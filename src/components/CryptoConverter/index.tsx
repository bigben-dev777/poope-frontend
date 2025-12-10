import { useState } from "react";

import { Add, KeyboardArrowDownOutlined, SyncAlt } from "@mui/icons-material";
import {
  Button,
  InputBase,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import { MetamaskWithText, PoopeWithText } from "@/assets/WalletIcons";

const configData = {
  buy: {
    title: "Buy Poope",
    caption: "BUY",
    closeBtnCaption: "Swap",
    closeBtnIcon: <SyncAlt />,
  },
  swap: {
    title: "Swap Poope",
    caption: "Swap",
    closeBtnCaption: "Buy",
    closeBtnIcon: <Add />,
  },
};

// Styled components
const StyledPaper = styled(Paper)({
  position: "relative",
  padding: 16,
  borderRadius: 16,
});

const InputContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
  border: "1px solid #141414",
  borderRadius: "12px",
  padding: "12px 16px",
  color: "#141414",
});

const StyledInputBase = styled(InputBase)({
  flex: 1,
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: 500,
});

// const StyledCloseButton = styled(Button)({
//   position: "absolute",
//   top: "10px",
//   right: "10px",
//   flexDirection: "row",
//   alignItems: "center",
//   gap: 16,
// });

const CryptoConverter = () => {
  const [usdtAmount, setUsdtAmount] = useState<number>(0);
  const [poopeAmount, setPoopeAmount] = useState<number>(0);
  const [role, setRole] = useState<"buy" | "swap">("buy");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    toPoope: boolean,
  ) => {
    if (toPoope) {
      const s = event.target.value;
      setUsdtAmount(Number.parseInt(s));
      setPoopeAmount(Number.parseInt(s) * 110);
    } else {
      const s = event.target.value;
      setPoopeAmount(Number.parseInt(s));
      setUsdtAmount(Number.parseFloat((Number.parseInt(s) / 110).toFixed(2)));
    }
  };

  const handleToggleRole = () => {
    if (role === "buy") {
      setRole("swap");
    } else {
      setRole("buy");
    }
  };

  return (
    <StyledPaper>
      <Stack gap={3}>
        <Typography>{configData[role].title}</Typography>
        <Stack
          gap={1.5}
          sx={{
            flexDirection: role === "buy" ? "column" : "column-reverse",
          }}
        >
          <InputContainer>
            <StyledInputBase
              value={usdtAmount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event, true)
              }
            />
            <Typography variant="h6" color="primary">
              MAX
            </Typography>
            <MetamaskWithText />
            <KeyboardArrowDownOutlined />
          </InputContainer>
          <InputContainer>
            <StyledInputBase
              value={poopeAmount}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event, false)
              }
            />
            <PoopeWithText />
          </InputContainer>
        </Stack>
        <Stack alignItems="center">
          <Typography variant="h6" color="textPrimary">
            1 USDT = 100 $POI
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Transaction fee: 0.20$
          </Typography>
        </Stack>
        <Button color="primary" variant="contained">
          {configData[role].caption}
        </Button>
      </Stack>
      <StyledCloseButton onClick={handleToggleRole}>
        {configData[role].closeBtnIcon}
        <Typography variant="h5" color="primary">
          {configData[role].closeBtnCaption}
        </Typography>
      </StyledCloseButton>
    </StyledPaper>
  );
};

export default CryptoConverter;
