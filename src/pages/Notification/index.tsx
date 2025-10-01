import Alert from "@/components/Alert";
import { CheckOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const initData = [
  {
    type: "alert",
    checked: false,
    title: "Christmas Promo is here now!!",
    content:
      "Join the challenge and get $POI up to 2000. Don’t waste any more time. Join now",
    time: "2025/09/16",
    extra: [
      {
        type: "button",
        title: "JOIN PROMO",
      },
    ],
  },
  {
    type: "buy",
    checked: false,
    title: "You successfully Buy 500 #POI",
    content:
      "You have successfully initiated the transaction. Amount will reflect in wallet within 1 hour",
    time: "2025/09/15",
  },
  {
    type: "exchange",
    checked: true,
    title: "You successfully swap 500 USDT to My Wallet",
    content:
      "You have successfully initiated the transaction. Amount will reflect in wallet within 1 hour",
    time: "2025/09/15",
  },
  {
    type: "buy",
    checked: true,
    title: "You successfully Buy 0.000046 BTC",
    content:
      "You have successfully initiated the transaction. Amount will reflect in wallet within 1 hour",
    time: "2025/09/15",
  },
];

const Notification = () => {
  return (
    <Box
      component="section"
      sx={{
        padding: "24px 32px",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <Typography variant="h6" color="textSecondary" flex={1}>
          You have 2 new notifications
        </Typography>
        <Button
          color="inherit"
          variant="contained"
          startIcon={<CheckOutlined />}
          sx={(theme) => ({
            textTransform: "none",
            ...theme.applyStyles("dark", {
              color: "ffd258",
            }),
          })}
        >
          Mark all as read
        </Button>
        <Button
          color="inherit"
          variant="contained"
          endIcon={<KeyboardArrowDownOutlined />}
          sx={{
            textTransform: "none",
          }}
        >
          Newest
        </Button>
      </Stack>
      <Stack
        sx={{
          gap: "16px",
        }}
      >
        {initData.map((item) => (
          <Alert item={item} key={item.time + item.title} />
        ))}
      </Stack>
    </Box>
  );
};

export default Notification;
