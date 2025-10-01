import { NorthEast, SouthEast } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { initData } from "./about.constant";
import {
  StyledButtonStack,
  StyledImg,
  StyledImgStack,
  StyledLeftStack,
  StyledMainStack,
} from "./about.style";

const About = () => {
  return (
    <Box component="section" id="about">
      <Container maxWidth="xl">
        <StyledMainStack>
          <StyledLeftStack>
            <Stack component="h2" direction="row">
              <Typography component="span" variant="h2">
                About{" "}
              </Typography>
              <Typography component="span" variant="h2" color="textHighlight">
                POOPECOIN
              </Typography>
            </Stack>
            <Typography variant="body1">
              {initData.desc}
              <br />
              <br />
              {initData.desc1}
            </Typography>
            <StyledButtonStack>
              <Button
                color="primary"
                variant="contained"
                size="large"
                endIcon={<NorthEast />}
              >
                BUY POOPE
              </Button>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                endIcon={<SouthEast />}
              >
                READ MORE
              </Button>
            </StyledButtonStack>
          </StyledLeftStack>

          <StyledImgStack>
            <StyledImg src="./assets/toilet-open.png" />
          </StyledImgStack>
        </StyledMainStack>
      </Container>
    </Box>
  );
};

export default About;
