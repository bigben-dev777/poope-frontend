import { Box, Container, Stack, Typography } from "@mui/material";

import { SlicerBar } from "@/components/SlicerBar";

const initData = {
  desc: "This roadmap outlines our journey to exciting milestones, including listings on major exchanges. Let's pave the way for innovative developments.",
  roadmap: [
    {
      imgUrl: "./assets/single_paper.png",
      content: [
        {
          title: "PHASE1",
          items: ["Launch on Solana", "Website Landing Page", "Marketing"],
        },
      ],
    },
    {
      imgUrl: "./assets/single_paper.png",
      content: [
        {
          title: "PHASE2",
          items: [
            "Twitter/X Marketing",
            "Dexscreener and Birdeye Update",
            "Build our Community",
          ],
        },
      ],
    },
    {
      imgUrl: "./assets/Paper-sheet.png",
      content: [
        {
          title: "PHASE3",
          items: ["Trending on X", "CG CMC Listing"],
        },
        {
          title: "PHASE4",
          items: [
            "Establish Poopie presence",
            "Spreading memes",
            "Ensure long-term sustainability",
          ],
        },
      ],
    },
  ],
};

const Roadmap = () => {
  return (
    <Box component="section" id="roadmap">
      <Container maxWidth="xl">
        <Stack
          sx={{
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            padding: {
              xs: "50px 20px 20px 20px",
              lg: "150px 0px 20px 0px",
            },
          }}
        >
          <Stack component="h2" direction="row">
            <Typography component="span" variant="h2">
              OUR&nbsp;
            </Typography>
            <Typography component="span" variant="h2" color="textHighlight">
              ROADMAP
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
            }}
          >
            {initData.desc}
          </Typography>
        </Stack>
      </Container>
      <SlicerBar data={initData.roadmap} />
    </Box>
  );
};
export default Roadmap;
