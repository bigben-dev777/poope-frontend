import { Button, Paper, Stack, Typography } from "@mui/material";

// const initData = [
//   {
//     title: "Email",
//     desc: "help@poope.com",
//   },
//   {
//     title: "Phone",
//     desc: "+1 21865214",
//   },
//   {
//     title: "Address",
//     desc: "Boulevard 2442 Caava, California",
//   },
//   {
//     title: "Contact us now",
//     button: "SEND US A MESSAGE",
//   },
// ];

const ContactCard = () => {
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
            Contact Us
          </Typography>
          <Typography variant="h6" color="textSecondary">
            contact us for some help
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
              <Typography
                flex={1}
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
              {item.button !== undefined && (
                <Button variant="contained" color="primary">
                  {item.button}
                </Button>
              )}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ContactCard;
