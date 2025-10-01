import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

interface Props {
  tabs: string[];
}

export default function SelectTop({ tabs }: Props) {
  const [title, setTitle] = React.useState(tabs[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setTitle(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, width: "95%" }} size="small">
      <Select
        value={title}
        onChange={handleChange}
        sx={{
          background: "#ffd258",
          border: "1px solid #000",
          width: "100%",
          borderRadius: "100px",
          padding: "10px 8px 0px 8px",
          color: "#141414",
        }}
      >
        {tabs.map((tab) => (
          <MenuItem value={tab} key={tab}>
            <Typography variant="h4">{tab}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
