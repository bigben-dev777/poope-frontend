import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface Props {
  data: {
    id: string;
    title: string;
    content: string;
  }[];
}

export default function AccordionDefault({ data }: Props) {
  const [curKey, setCurKey] = React.useState<string>("");

  // const handleClick = (itemKey: string) => () => {
  //   setCurKey(itemKey);
  // };

  return (
    <Box>
      {data.map((item, index) => (
        <Accordion
          key={`${item.title}+${index}`}
          expanded={curKey === item.id}
          onChange={handleClick(item.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" variant="body1">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2" sx={{ lineHeight: "30px" }}>
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
