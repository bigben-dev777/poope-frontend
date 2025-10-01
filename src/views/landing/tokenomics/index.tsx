import { NorthEast } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  Typography,
} from "@mui/material";

const initData = {
  desc: [
    "100% community owned. No dev holding supply.",
    "LP 100% burnt. ",
    "989 million $sc supply",
    "100% released in circulation.",
  ],
};

const StyledMainStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  padding: "50px 20px",
  gap: "24px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row-reverse",
    padding: "150px 0px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "150px 0px",
  },
}));

const StyledLeftStack = styled(Stack)({
  flex: 1,
  gap: "24px",
  alignItems: "flex-start",
});

const StyledImgStack = styled(Stack)({
  flex: 1,
});

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const Tokenomic = () => {
  return (
    <Box component="section" id="tokenomics">
      <Container maxWidth="xl">
        <StyledMainStack>
          <StyledLeftStack>
            <Stack component="h2" direction="row">
              <Typography component="span" variant="h2" color="textHighlight">
                TOKEN
              </Typography>
              <Typography component="span" variant="h2">
                OMIC
              </Typography>
            </Stack>
            <Stack
              sx={{
                mb: "26px",
              }}
            >
              <Typography variant="body1">POOPE is</Typography>
              <Stack
                component="ul"
                sx={{
                  margin: "0px",
                }}
              >
                {initData.desc.map((item: string) => (
                  <Typography component="li" variant="body1" key={item}>
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
            <Button
              color="primary"
              variant="contained"
              size="large"
              endIcon={<NorthEast />}
            >
              BUY POOPE
            </Button>
          </StyledLeftStack>
          <StyledImgStack>
            <StyledImg src="./assets/tokenomic.png" />
          </StyledImgStack>
        </StyledMainStack>
      </Container>
    </Box>
  );
};
export default Tokenomic;
