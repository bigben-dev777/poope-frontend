import { Stack, Typography } from "@mui/material";
import { Logo } from "./Images";

export const Metamask = ({ size }: { size: number }) => {
  return <img src="./assets/wallet (1).png" width={size} height={size} />;
};

export const Phantom = ({ size }: { size: number }) => {
  return <img src="./assets/wallet (2).png" width={size} height={size} />;
};

export const Solflare = ({ size }: { size: number }) => {
  return <img src="./assets/wallet (3).png" width={size} height={size} />;
};

export const More = ({ size }: { size: number }) => {
  return <img src="./assets/wallet (4).png" width={size} height={size} />;
};

export const MetamaskWithText = () => {
  return (
    <Stack flexDirection="row" alignItems="center">
      <Metamask size={20} />
      <Typography variant="h6" color="textSecondary">
        USDT
      </Typography>
    </Stack>
  );
};

export const PhantomWithText = () => {
  return (
    <Stack flexDirection="row" alignItems="center">
      <Phantom size={20} />
      <Typography variant="h6" color="textSecondary">
        USDT
      </Typography>
    </Stack>
  );
};

export const SolflareWithText = () => {
  return (
    <Stack flexDirection="row" alignItems="center">
      <Solflare size={20} />
      <Typography variant="h6" color="textSecondary">
        USDT
      </Typography>
    </Stack>
  );
};

export const PoopeWithText = () => {
  return (
    <Stack flexDirection="row" alignItems="center">
      <Logo size={20} />
      <Typography variant="h6" color="textSecondary">
        $POOPE
      </Typography>
    </Stack>
  );
};
