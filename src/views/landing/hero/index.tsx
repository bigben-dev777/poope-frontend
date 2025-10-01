import { Box, Container, Typography } from "@mui/material";

import Star from "@/components/Effects/Start";

const Hero = () => {
  return (
    <Box component="section" id="hero">
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "10vh",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              width: "fit-content",
              fontFamily: "Mountains of Christmas",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: { xs: 90, sm: 100, md: 150, lg: 200 },
              lineHeight: "100%",
              letterSpacing: "2%",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            POOPE
          </Typography>
          <Typography
            sx={{
              width: "fit-content",
              fontFamily: "Mountains of Christmas",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: { xs: 100, sm: 130, md: 200, lg: 300 },
              lineHeight: "100%",
              letterSpacing: "6%",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            solana
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: { xs: 160, sm: 200, md: 240, lg: 320 },
              height: { xs: 160, sm: 200, md: 240, lg: 320 },
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src="./assets/poope-coin.png"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="Poope Coin"
            />
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 3,
            fontWeight: 400,
            textAlign: "center",
            paddingInline: "10vw",
          }}
        >
          Every bathroom break becomes a bullseye moment to embrace your inner
          marksman. Nail that tight deadline, blast through the crypto world.
        </Typography>
      </Container>
      {/* <Cloud /> */}
      <Star />
      <Star />
      <Star />
    </Box>
  );
};
export default Hero;
