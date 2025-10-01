import { type Theme, useMediaQuery } from "@mui/material";

export function useDeviceType() {
  const isNotDesktop = useMediaQuery<Theme>(
    (theme) => theme.breakpoints.down("lg"),
    {
      noSsr: true,
    },
  );
  const isDesktop = useMediaQuery<Theme>(
    (theme) => theme.breakpoints.up("lg"),
    {
      noSsr: true,
    },
  );
  const isTablet = useMediaQuery<Theme>(
    (theme) => theme.breakpoints.only("md"),
    {
      noSsr: true,
    },
  );
  const isMobile = useMediaQuery<Theme>(
    (theme) => theme.breakpoints.down("md"),
    {
      noSsr: true,
    },
  );

  return { isNotDesktop, isDesktop, isTablet, isMobile };
}
