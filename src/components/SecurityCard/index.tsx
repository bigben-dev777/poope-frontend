import { Paper, Stack, Typography } from "@mui/material";
import { FormMenu, FormToggleButton } from "../FormInput";

const initData = [
  {
    type: "toggle",
    title: "Security scanner",
    desc: "Show warning for high-risk transaction",
  },
  {
    type: "toggle",
    title: "Passcode",
  },
  {
    type: "menu",
    title: "Auto-lock",
  },
  {
    type: "menu",
    title: "Lock Method",
  },
  {
    type: "toggle",
    title: "Transaction signing",
    desc: "Ask for aprroval ahead of transactions.",
  },
];

const SecurityCard = () => {
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
            Account info
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Update your photo and personal details here
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
              {item.type === "toggle" ? <FormToggleButton /> : <FormMenu />}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SecurityCard;
