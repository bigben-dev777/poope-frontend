import { useLocation } from "react-router-dom";

import {
  DarkModeOutlined,
  KeyboardArrowRightOutlined,
  Menu,
  NotificationsNoneOutlined,
  SearchOutlined,
  WbSunny,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/material";

import { Logo } from "@/assets/Images";
import LanguageBar from "@/components/LanguageBar";
import { useAppContext } from "@/contexts/AppContext";
import ColorModeSelect from "@/theme/ColorModeSelect";

import { StyledTextField } from "./header.style";

const Header = () => {
  const location = useLocation();
  const { setNavbarClose } = useAppContext();
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const handleToggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  let bread = location.pathname.slice(1);
  bread = bread.slice(0, 1).toUpperCase() + bread.slice(1);

  return (
    <Box component="header">
      {/* desktop header */}
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: { xs: "column-reverse", lg: "row" },
          px: "32px",
          pt: "24px",
        }}
      >
        <Stack
          flex={1}
          sx={{
            flexDirection: "row",
            paddingRight: "32px",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <Breadcrumbs>
            <Typography sx={{ color: "text.primary" }}>{bread}</Typography>
          </Breadcrumbs>
          <Stack flex={1} />
          <LanguageBar contained={true} />
          <Button
            color="inherit"
            variant="contained"
            sx={{
              padding: "10px 8px 10px 12px",
              fontSize: "14px",
              lineHeigh: "20px",
              gap: "8px",
              height: 40,
              width: { xs: 40, sm: "fit-content" },
            }}
            endIcon={<KeyboardArrowRightOutlined />}
          >
            Manage
          </Button>
        </Stack>
        <Stack
          sx={{
            width: "350px",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <StyledTextField
            size="small"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <ColorModeSelect />
          <Avatar>H</Avatar>
        </Stack>
      </Stack>
      {/* mobile h */}
      <Stack
        sx={{
          display: { xs: "flex", md: "none" },
          padding: "10px 20px",
        }}
      >
        <Stack
          flex={1}
          sx={{
            flexDirection: "row",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <Breadcrumbs>
            <Typography sx={{ color: "text.primary" }}>{bread}</Typography>
          </Breadcrumbs>
          <Stack flex={1} />
          <LanguageBar contained={true} />
          <IconButton
            sx={(theme) => ({
              background: theme.palette.background.paper,
              borderRadius: "8px",
            })}
          >
            <KeyboardArrowRightOutlined />
          </IconButton>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <IconButton onClick={() => setNavbarClose(false)}>
            <Menu />
          </IconButton>
          <Logo size={32} />
          <Stack flex={1} />
          <IconButton onClick={handleToggleTheme}>
            {mode === "light" ? <DarkModeOutlined /> : <WbSunny />}
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <NotificationsNoneOutlined />
          </IconButton>
          <Avatar>H</Avatar>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
