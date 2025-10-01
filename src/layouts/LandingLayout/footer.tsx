import LanguageBar from "@/components/LanguageBar";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { Logo } from "../../assets/Images";

const initData = {
  footerList: [
    {
      title: "sitemap",
      items: ["What is Poope", "Buy Poope", "FAQ"],
    },
    {
      title: "fundation",
      items: ["About", "Tokenomics", "Roadmap", "Community", "Blog"],
    },
  ],
};

const Footer = () => {
  const lists = initData.footerList;

  return (
    <Box component="footer">
      <Container
        maxWidth="xl"
        sx={{
          padding: {
            xs: "50px 20px 16px 20px",
            lg: "70px 0px 20px 0px",
            xl: "100px 0px 32px 0px",
          },
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: "50px",
          }}
        >
          <Stack
            flex={2}
            sx={{
              alignItems: { xs: "center", md: "flex-start" },
              gap: 2,
            }}
          >
            {/* logo */}
            <Link component="a">
              <Stack direction={"row"} gap={1}>
                <Logo size={48} />
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { lg: "50px" },
                    lineHeight: { lg: "60px" },
                  }}
                >
                  POOPE
                </Typography>
              </Stack>
            </Link>
            {/* description */}
            <Typography
              component="p"
              variant="subtitle2"
              sx={{
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Every bathroom break becomes a bullseye moment to embrace your
              inner marksman. Nail that tight deadline, blast through the crypto
              world.
            </Typography>
          </Stack>
          {/* footer list */}
          {lists.map((list) => (
            <Stack key={list.title} flex={1}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Mountains of Christmas",
                  mb: "24px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {list.title.toUpperCase()}
              </Typography>
              <Stack
                rowGap={2}
                sx={{
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                {list.items.map((item) => (
                  <Link color="primary" key={item}>
                    <Typography variant="subtitle2">{item}</Typography>
                  </Link>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
        <hr
          style={{
            marginTop: "32px",
            marginBottom: "32px",
          }}
        />
        <Stack
          sx={(theme) => ({
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column-reverse",
            },
          })}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "400",
            }}
          >
            Ⓒ Poope 2024
          </Typography>
          <Stack flex={1} />
          <Stack
            sx={(theme) => ({
              flexDirection: "row",
              alignItems: "center",
              [theme.breakpoints.down("md")]: {
                flexDirection: "column",
              },
            })}
          >
            <Stack direction="row" gap="16px">
              <Typography variant="h5">Privacy Policy</Typography>
              <Typography variant="h5">Terms & Conditions</Typography>
            </Stack>
            <LanguageBar contained={false} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
