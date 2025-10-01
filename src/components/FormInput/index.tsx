import { brown } from "@/theme/themePrimitives";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputBase,
  Stack,
  Switch,
  TextField,
  Typography,
  darken,
  styled,
} from "@mui/material";
import { useState } from "react";

const FormInput = ({ label }: { label: string }) => {
  return (
    <Stack>
      <Typography variant="h5">{label}</Typography>
      <InputBase
        sx={(theme) => ({
          my: "16px",
          padding: "12px 16px",
          backgroundColor: darken(theme.palette.background.paper, 0.15),
          color: "text.primary",
          borderRadius: 1,
          transition: "all 0.3s ease",
          fontSize: "16px",
          lineHeight: "24px",
        })}
      ></InputBase>
    </Stack>
  );
};

export const FromTextEditor = ({ label }: { label: string }) => {
  const [value, setValue] = useState("");

  return (
    <Stack>
      <Typography variant="h5">{label}</Typography>
      <TextField
        value={value}
        onChange={(event) => setValue(event.target.value)}
        multiline
        rows={5}
        sx={(theme) => ({
          my: "16px",
          padding: "12px 16px",
          backgroundColor: darken(theme.palette.background.paper, 0.15),
          color: "text.primary",
          borderRadius: 1,
          transition: "all 0.3s ease",
          "& .MuiInputBase-root": {
            fontSize: "16px",
            lineHeight: "24px",
            padding: "0px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            display: "none",
          },
        })}
      ></TextField>
    </Stack>
  );
};

export const FormToggleButton = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "white",
    "&:hover": {
      backgroundColor: brown[500],
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: brown[500],
  },
}));

export const FormMenu = () => {
  return (
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
      Intermediate
    </Button>
  );
};

export const FormArrowButton = () => {
  return (
    <IconButton>
      <KeyboardArrowRightOutlined />
    </IconButton>
  );
};

export default FormInput;
