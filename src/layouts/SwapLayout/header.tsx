import ConnectWallet from "@/components/ConnectWallet";
import { MenuOutlined, WalletOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Link,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Logo } from "../../assets/Images";
import LanguageBar from "../../components/LanguageBar";
import ColorModeSelect from "../../theme/ColorModeSelect";
import MobileHeader from "./mobileHeader";

const Navbar = styled(Stack)(({ theme }: { theme: Theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 32,
  [theme.breakpoints.down("lg")]: {
    gap: 8,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  const [walletOpen, setWalletOpen] = useState(false);
  const [mobileHeaderOpen, setMoblieHeaderOpen] = useState(false);

  function handleConnectWallet() {
    if (walletOpen) {
      setWalletOpen(false);
    } else {
      setWalletOpen(true);
    }
  }

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: "0px",
        left: "0px",
        zIndex: "100",
        backdropFilter: "blur(15px)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        transition: "background 0.3s",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          padding: { xs: "24px 10px", lg: "24px 30px", xl: "24px 100px" },
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* logo */}
          <Link>
            <Stack direction={"row"} gap={1}>
              <Logo size={36} />
              <Typography variant="h3" sx={{ fontSize: "34px" }}>
                POOPE
              </Typography>
            </Stack>
          </Link>
          {/* navigation */}
          <Navbar>
            {["Swap", "Pools"].map((item) => (
              <Link
                href={"#" + item.trim().toLowerCase()}
                variant="subtitle2"
                color="primary"
                key={item}
              >
                {item}
              </Link>
            ))}
            <LanguageBar contained={false} />
          </Navbar>
          {/* header buttons */}
          <Stack
            sx={{
              flexDirection: "row",
              columnGap: "8px",
            }}
          >
            <ColorModeSelect />
            <Stack
              sx={{
                flexDirection: "row",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => setWalletOpen(true)}
                startIcon={<WalletOutlined />}
                sx={{
                  width: "138px",
                }}
              >
                CONNECT
              </Button>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                display: { xs: "flex", md: "none" },
              }}
            >
              <ButtonBase
                color="primary"
                onClick={() => setMoblieHeaderOpen(true)}
              >
                <Stack
                  width="40px"
                  height="40px"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MenuOutlined />
                </Stack>
              </ButtonBase>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <ConnectWallet open={walletOpen} setOpen={handleConnectWallet} />
      <MobileHeader
        open={mobileHeaderOpen}
        handleClose={() => setMoblieHeaderOpen(false)}
      />
    </Box>
  );
};

export default Header;
