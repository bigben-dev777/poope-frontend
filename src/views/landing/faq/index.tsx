import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  styled,
  Theme,
  Typography,
} from "@mui/material";

import AccordionDefault from "@/components/AccordionDefault";
import SelectTop from "@/components/SelectTop";

interface accordion {
  id: string;
  title: string;
  content: string;
  type: number;
}

const initData = {
  tabs: [
    "Frequently Asked Questions",
    "Resources",
    "How to’s",
    "Documentation",
  ],
  accordions: [
    {
      id: "accordion1",
      title: "A hale holds nearly 30% of Poope Coin supply! Is this true?",
      content:
        "Oh yes it does, and it always has! The simple fact is that money has utility - and Poope is money! Indeed, Poopecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poope was first meant to be a joke... READ MORE",
      type: 1,
    },
    {
      id: "accordion2",
      title: "Poope Coin has no utility!",
      content:
        "Oh yes it does, and it always has! The simple fact is that money has utility - and Poope is money! Indeed, Poopecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poope was first meant to be a joke... READ MORE",
      type: 1,
    },
    {
      id: "accordion3",
      title: "Can you put a cap on Poope Coin?",
      content:
        "Oh yes it does, and it always has! The simple fact is that money has utility - and Poope is money! Indeed, Poopecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poope was first meant to be a joke... READ MORE",
      type: 2,
    },
    {
      id: "accordion4",
      title: "Poope Coin has no developers!",
      content:
        "Oh yes it does, and it always has! The simple fact is that money has utility - and Poope is money! Indeed, Poopecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poope was first meant to be a joke... READ MORE",
      type: 3,
    },
  ],
};

const SectionHeader = styled(Stack)(({ theme }: { theme: Theme }) => ({
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  "& #read-more": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Faq = () => {
  const [curTab, setCurTab] = useState<number>(0);
  const [data, setData] = useState<accordion[]>(initData.accordions);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    const nextData = initData.accordions.filter(
      (item) => item.type >= newValue,
    );
    setCurTab(newValue);
    setData(nextData);
  };

  return (
    <Box component="section" id="faq">
      <Container
        maxWidth="xl"
        style={{
          gap: "24px",
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            padding: { xs: "50px 20px", lg: "150px 50px", xl: "150px" },
          }}
        ></Stack>
        <SectionHeader>
          <Typography component="span" variant="h2" flexShrink={0}>
            FIND OUT&nbsp;
          </Typography>
          <Typography component="span" variant="h2" color="textHighlight">
            MORE
          </Typography>
          <Stack flex={1} />
          <Stack id="read-more">
            <Typography variant="body1" sx={{ maxWidth: "260px" }}>
              Did you find what you looking for?
            </Typography>
            <Button color="secondary" variant="contained">
              View More
            </Button>
          </Stack>
        </SectionHeader>
        <Grid2
          container
          justifyContent="space-between"
          sx={{
            gap: { xs: 1, md: 2, lg: 5, xl: 12.5 },
            mt: { xs: 5, md: 10 },
          }}
        >
          <Grid2 size={{ xs: 12, md: 3, lg: 4 }}>
            <Stack
              alignItems="flex-start"
              sx={{
                gap: "16px",
                display: { xs: "none", md: "flex" },
              }}
            >
              {initData.tabs.map((tab, index) => (
                <Button
                  color={index === curTab ? "primary" : "secondary"}
                  variant="contained"
                  size="large"
                  key={index}
                  onClick={(event) => handleTabChange(event, index)}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: { xs: "nowrap", md: "break-spaces" },
                    }}
                  >
                    {tab}
                  </Typography>
                </Button>
              ))}
            </Stack>
            <Stack
              sx={{
                display: { xs: "block", md: "none" },
                justifyItems: "center",
              }}
            >
              <SelectTop tabs={initData.tabs} />
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <AccordionDefault data={data} />
          </Grid2>
        </Grid2>
        <Stack
          sx={{
            gap: "24px",
            display: { xs: "flex", md: "none" },
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ maxWidth: "260px", textAlign: "center" }}
          >
            Did you find what you looking for?
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            sx={(theme) => ({
              ...theme.applyStyles("dark", {
                borderColor: "black",
              }),
            })}
          >
            View More
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Faq;
