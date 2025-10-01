import type { ThemeOptions } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import * as React from "react";

import {
  breakpoints,
  colorSchemes,
  shadows,
  shape,
  typography,
} from "./themePrimitives";

import { dataDisplayCustomizations } from "./customizations/dataDisplay";
import { inputsCustomizations } from "./customizations/inputs";
import { navigation } from "./customizations/navigation";
import { surfaceCustomization } from "./customizations/surface";

interface AppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions["components"];
}

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
          cssVariables: {
            colorSchemeSelector: "data-mui-color-scheme",
            cssVarPrefix: "template",
          },
          colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
          breakpoints,
          typography,
          shadows,
          shape,
          components: {
            ...navigation,
            ...inputsCustomizations,
            ...surfaceCustomization,
            ...themeComponents,
            ...dataDisplayCustomizations,
          },
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
