import { LoopOutlined } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  darken,
  keyframes,
  Link,
  Stack,
  Typography,
} from "@mui/material";

const slideInFromRight = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(10%);
  }
  100% {
    opacity: 0.3;
    transform: scale(120%);
  }
`;

const StatusLight = ({ checked }: { checked: boolean }) => {
  return (
    <Box
      sx={{
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
          padding: checked ? "10px" : "3px",
          borderRadius: checked ? "10px" : "100px",
          background: checked ? "#74747410" : "hsl(44, 100%, 80%)",
        }}
      >
        <LoopOutlined />
      </Stack>
      {!checked && (
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "48px",
            height: "48px",
            borderRadius: "100px",
            background: "hsl(44, 100%, 80%)",
            animation: `${slideInFromRight} 1s ease-in-out infinite`,
          }}
        />
      )}
    </Box>
  );
};

const calcTimeSpan = (time: string) => {
  const last = new Date(time);
  const span = new Date(Date.now() - last.getMilliseconds());

  return `${span.getDay()}d ago`;
};

const Alert = ({
  item,
}: {
  item: {
    checked: boolean;
    title: string;
    content: string;
    time: string;
    extra?: any[];
  };
}) => {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: "8px",
        background: item.checked
          ? darken(theme.palette.background.paper, 0)
          : alpha(theme.palette.primary.main, 0.5),
      })}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "12px",
          padding: "12px",
        }}
      >
        <StatusLight checked={item.checked} />
        <Stack
          flex={1}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: "12px",
          }}
        >
          <Stack flex={1}>
            <Typography variant="h5" color="textPrimary">
              {item.title}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {item.content}
            </Typography>
            <Link color="error">{calcTimeSpan(item.time)}</Link>
          </Stack>
          <Stack>
            {item.extra?.map((etc) => {
              if (etc.type === "button") {
                return (
                  <Button variant="contained" color="primary">
                    {etc.title}
                  </Button>
                );
              }
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Alert;
