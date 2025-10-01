import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTextField = styled(TextField)({
  width: "214px",
  backgroundColor: "white",
  borderRadius: "8px",
  "& .MuiInputBase-input": {
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    display: "none",
  },
});
