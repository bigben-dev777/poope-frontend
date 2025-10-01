import { Box } from "@mui/material";

import SettingTabs from "@/views/setting";

const Setting = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px 10px", lg: "24px 32px" },
      }}
    >
      <SettingTabs />
    </Box>
  );
};

export default Setting;
