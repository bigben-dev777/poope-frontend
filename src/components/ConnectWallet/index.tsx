import { Metamask, More, Phantom, Solflare } from "@/assets/WalletIcons";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

interface ConnectWalletProps {
  open: boolean;
  setOpen: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const WalletButton = styled(Button)(({ theme }) => ({
  borderRadius: "100px",
  // background: theme.palette.mode === "light" ? "#EED6B7" : "#141414",
  border: `1px solid ${theme.palette.mode === "light" ? "#EED6B7" : "#141414"}`,
  width: "352px",
  height: "56px",
  "&:hover": {
    background: theme.palette.mode === "light" ? "#DEC29E" : "#2D2D2D",
    borderColor: theme.palette.mode === "light" ? "#DEC29E" : "#313131",
  },
  "& .MuiTypography-root": {
    color: "#141414",
    fontSize: "18px",
    fontWeight: "500",
  },
}));

export default function ConnectWallet({ open, setOpen }: ConnectWalletProps) {
  return (
    <>
      <BootstrapDialog
        onClose={setOpen}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "light" ? "#ffd25820" : "hsla(0,0%,10%,.2)",
          p: "24px",
          "& .MuiPaper-root": {
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: theme.palette.mode === "light" ? "#fff" : "#313131",
            backgroundColor:
              theme.palette.mode === "light" ? "#F6E6CD" : "#242424",
          },
        })}
      >
        <DialogTitle
          component="div"
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
            }}
          >
            Connect to your <br /> Solana Wallet
          </Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={setOpen}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "335px",
            maxWidth: "400px",
            gap: "12px",
          }}
        >
          <WalletButton size="large" startIcon={<Metamask size={24} />}>
            <Typography variant="button">Metamask</Typography>
          </WalletButton>
          <WalletButton size="large" startIcon={<Phantom size={24} />}>
            <Typography variant="button">Phanthom</Typography>
          </WalletButton>
          <WalletButton size="large" startIcon={<Solflare size={24} />}>
            <Typography variant="button">Solflare</Typography>
          </WalletButton>
          <WalletButton size="large" startIcon={<More size={24} />}>
            <Typography variant="button">More...</Typography>
          </WalletButton>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
