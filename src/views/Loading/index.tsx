import { useEffect, useState } from "react";

import { Box, Container, Stack, Typography } from "@mui/material";

import { NotFoundError } from "@/assets/Images";

const LoadingSection = () => {
  const [caption, setCaption] = useState(".");

  useEffect(() => {
    const timerId = setInterval(() => {
      setCaption((prevCaption) => {
        console.log(prevCaption.length);
        if (prevCaption.length > 2) {
          return "";
        } else {
          return prevCaption + ".";
        }
      });
    }, 300);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Box component="section" id="loading">
      <Container maxWidth="xl">
        <Stack
          sx={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NotFoundError size={350} />
          </Stack>
          <Stack flexDirection="row" justifyItems="flex-start">
            <Typography variant="h1" color="textPrimary">
              LANDING
            </Typography>
            <Typography component="span" color="textPrimary" variant="h1">
              {caption}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default LoadingSection;
