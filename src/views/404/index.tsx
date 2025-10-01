import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { NotFoundError } from "@/assets/Images";

const NotFound = () => {
  return (
    <Box component="section">
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
          <Typography variant="h1">Get Your Sh!t Done</Typography>
          <Typography
            variant="body1"
            sx={{
              width: "70%",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pharetra integer vel quam amet eget. Massa nec nam molestie urna,
            iaculis sed.{" "}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            BACK TO HOME
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default NotFound;
