import { WbSunny } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";
import { styled, useColorScheme } from "@mui/material/styles";

const ThemeButton = styled((props: ButtonProps) => <Button {...props} />)(
  () => ({
    padding: "10px",
    minWidth: "40px",
  }),
);

export default function ColorModeSelect() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const handleClick = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <ThemeButton
      variant="outlined"
      onClick={handleClick}
      sx={{
        width: { xs: "40px", md: "48px" },
        height: { xs: "40px", md: "48px" },
      }}
    >
      <WbSunny />
    </ThemeButton>
  );
}
