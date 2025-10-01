import { Box } from "@mui/material";

export default function Cloud() {
  return (
    <Box
      sx={{
        "@keyframes move": {
          "0%": {
            right: "-300px",
          },
          "100%": {
            right: "calc(140vw + 100px)",
          },
        },
        zIndex: "-10",
        width: "200px",
        height: "140px",
        top: "30vh",
        position: "absolute",
        animation: "move 3s infinite",
      }}
    >
      <img
        src="./assets/poope.png"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
  );
}
