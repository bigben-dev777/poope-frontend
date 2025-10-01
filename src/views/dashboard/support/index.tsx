import { Box, Button, Paper, Stack, Typography } from "@mui/material";

import FormInput, { FromTextEditor } from "@/components/FormInput";

const Support = () => {
  return (
    <Box
      component="section"
      sx={(theme) => ({
        mt: "24px",
        padding: "24px 32px",
        height: "100%",
        background: { xs: theme.palette.background.paper, lg: "transparent" },
      })}
    >
      <Paper
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            background: "transparent",
            borderRadius: "0px",
          },
        })}
      >
        <Stack
          flex={1}
          sx={{
            flexDirection: "row",
            gap: "14px",
            flexWrap: "wrap",
            padding: "24px",
            justifyContent: "center",
          }}
        >
          <Stack sx={{ width: "100%" }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Inter",
              }}
            >
              Send us a message
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Send us a message about your problem or experiences.
            </Typography>
          </Stack>
          <Stack flex={1}>
            <FormInput label="Full name" />
            <FormInput label="Email" />
            <FromTextEditor label="Message" />
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: { lg: "flex-end" },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  padding: "8px 20px",
                }}
              >
                SEND VMESSAGE
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Support;
