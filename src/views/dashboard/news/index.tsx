import { Box, Button } from "@mui/material";

import {
  DescTypography,
  GrowStack,
  RowStack,
  Section,
  StyledPaper,
  TitleTypography,
} from "./news.style";

import { NewImage } from "@/assets/Images";

export const News = () => {
  return (
    <Section id="news">
      <StyledPaper>
        <Box>
          <NewImage size={120} />
        </Box>
        <RowStack flex={1}>
          <GrowStack>
            <TitleTypography color="textPrimary">
              New Features That Will Make Your <strong>Crypto</strong> Life
              Easier
            </TitleTypography>
            <DescTypography>
              We’re finally ready to tell you everything about this new version
            </DescTypography>
          </GrowStack>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            sx={{
              flexShrink: 0,
            }}
          >
            Let See
          </Button>
        </RowStack>
      </StyledPaper>
    </Section>
  );
};
