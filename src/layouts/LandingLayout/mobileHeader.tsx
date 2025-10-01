import ConnectWallet from "@/components/ConnectWallet";
import { CloseOutlined, WalletOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Logo } from "../../assets/Images";
import LanguageBar from "../../components/LanguageBar";
import ColorModeSelect from "../../theme/ColorModeSelect";

const Navbar = styled(Stack)(() => ({
  flexDirection: "column",
  alignItems: "center",
  gap: 32,
}));

const MobileHeader = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const [walletOpen, setWalletOpen] = useState(false);

  function handleConnectWallet() {
    if (walletOpen) {
      setWalletOpen(false);
    } else {
      setWalletOpen(true);
    }
  }

  return (
    <Box
      component="div"
      sx={(theme) => ({
        position: "absolute",
        top: open ? "0px" : "-2000px",
        left: "0px",
        zIndex: "100",
        transition: "all .4s ease-in-out",
        background: "#EED6B7",
        ...theme.applyStyles("dark", {
          background: "#242424",
        }),
      })}
    >
      <Stack
        sx={{
          height: "100vh",
          width: "100vw",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 16px",
          gap: "16px",
        }}
      >
        {/* logo */}
        <Stack
          sx={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link>
            <Stack direction={"row"} gap={1}>
              <Logo size={36} />
              <Typography variant="h3" sx={{ fontSize: "34px" }}>
                POOPE
              </Typography>
            </Stack>
          </Link>
          <IconButton onClick={handleClose}>
            <CloseOutlined />
          </IconButton>
        </Stack>
        {/* navigation */}
        <Navbar>
          {["About", "Tokenomics", "Roadmap", "Community", "FAQ"].map(
            (item) => (
              <Link
                href={"#" + item.trim().toLowerCase()}
                variant="subtitle2"
                color="primary"
                key={item}
                onClick={handleClose}
              >
                {item}
              </Link>
            ),
          )}
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
        </Stack>
      </Stack>
      <ConnectWallet open={walletOpen} setOpen={handleConnectWallet} />
    </Box>
  );
};

export default MobileHeader;
