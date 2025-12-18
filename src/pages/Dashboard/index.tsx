import { Stack } from "@mui/material";

import CryptoConverter from "@/components/CryptoConverter";
import TransactionHistory from "@/components/TransactionHistory";

import { Balance, Graph, News } from "@/views/dashboard";

const Dashboard = () => {
  return (
    <>
      <Stack
        sx={{
          flexDirection: { xs: "column", xl: "row" },
          px: "32px",
          pt: "24px",
        }}
      >
        <Stack flex={1}>
          {/* <Balance />
          <Graph />
          <News /> */}
        </Stack>
        {/* <Stack
          sx={{
            width: { xs: "100%", xl: "300px" },
            gap: "24px",
            flexDirection: { xs: "column", md: "row", xl: "column" },
          }}
        > */}
          <CryptoConverter />
          <TransactionHistory />
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;
