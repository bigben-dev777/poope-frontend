import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { USA } from "../../assets/Flags";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "#141414",
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

// const LanguageButton = styled((props: ButtonProps) => (
//   <Button {...props}></Button>
// ))(({ theme }) => {
//   return {
//     color: theme.palette.text.primary,
//   };
// });

export default function LanguageBar({ contained }: { contained: boolean }) {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Stack ref={anchorRef}>
        <Button
          variant={contained ? "contained" : "text"}
          color="inherit"
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            height: 40,
            width: { xs: 40, md: "fit-content" },
            display: { xs: contained ? "none" : "flex", md: "flex" },
          }}
        >
          <USA />
          <Typography variant="subtitle2" color="textPrimary">
            EN
          </Typography>
        </Button>
        {contained && (
          <Button
            variant="contained"
            color="inherit"
            onClick={handleClick}
            sx={{
              display: { xs: "block", md: "none" },
              width: "40px",
              height: "40px",
              paddingInline: "6px 6px",
              "&.MuiButtonBase-root": {
                minWidth: "0px",
              },
            }}
          >
            <USA />
          </Button>
        )}
      </Stack>
      <StyledMenu
        anchorEl={anchorRef.current}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <USA />
          <Typography variant="subtitle2">EN</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <USA />
          <Typography variant="subtitle2">EN</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <USA />
          <Typography variant="subtitle2">EN</Typography>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
