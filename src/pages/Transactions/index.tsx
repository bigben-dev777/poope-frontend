import CryptoConverter from "@/components/CryptoConverter";
import BasicTable from "@/views/transaction";
import { Stack } from "@mui/material";

const Transaction = () => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        px: "32px",
        pt: "24px",
        gap: "24px",
      }}
    >
      <Stack flex={1}>
        <BasicTable />
      </Stack>
      <Stack
        sx={{
          width: { xs: "100%", lg: "350px" },
          gap: "24px",
        }}
      >
        <CryptoConverter />
      </Stack>
    </Stack>
  );
};

export default Transaction;
