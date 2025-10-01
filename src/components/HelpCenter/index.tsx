import { Paper, Stack, Typography } from "@mui/material";
import { FormArrowButton, FormToggleButton } from "../FormInput";

const initData = [
  {
    type: "arrow",
    title: "Terms of service",
  },
  {
    type: "arrow",
    title: "Privacy Policy",
  },
  {
    type: "arrow",
    title: "Cookie use",
  },
  {
    type: "arrow",
    title: "Legal notice",
  },
  {
    type: "toggle",
    title: "Send crash reports",
    desc: "Automatically send crash reports",
  },
  {
    type: "1.1",
    title: "Version",
  },
];

const HelpCenter = () => {
  return (
    <Paper
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          background: "transparent",
        },
      })}
    >
      <Stack
        flex={1}
        sx={{
          flexDirection: "column",
          gap: "24px",
          padding: "24px",
          justifyContent: "center",
        }}
      >
        <Stack>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Inter",
            }}
          >
            Help Center
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Check out additional resources
          </Typography>
        </Stack>
        <Stack
          sx={{
            gap: "16px",
          }}
        >
          {initData.map((item) => (
            <Stack
              sx={{
                flexDirection: "row",
              }}
            >
              <Stack
                flex={1}
                sx={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </Typography>
                {item.desc !== undefined && (
                  <Typography variant="h6" color="textSecondary">
                    {item.desc}
                  </Typography>
                )}
              </Stack>
              {item.type === "toggle" ? (
                <FormToggleButton />
              ) : item.type === "arrow" ? (
                <FormArrowButton />
              ) : (
                <Typography variant="h6" color="textSecondary">
                  {item.type}
                </Typography>
              )}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default HelpCenter;
