import {
  AccountCircleOutlined,
  CallOutlined,
  HttpsOutlined,
  StickyNote2Outlined,
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
} from "@mui/material";
import * as React from "react";
import ContactCard from "../ContactCard";
import HelpCenter from "../HelpCenter";
import ProfileCard from "../ProfileCard";
import SecurityCard from "../SecurityCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// const initIcons = [
//   <AccountCircleOutlined />,
//   <HttpsOutlined />,
//   <StickyNote2Outlined />,
//   <CallOutlined />,
// ];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
        width: "-webkit-fill-available",
      }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setValue(Number.parseInt(event.target.value));
  };

  return (
    <Box
      sx={(theme) => ({
        flexGrow: 1,
        bgcolor: "transparent",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "row",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      })}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{
          minWidth: "172px",
          py: "24px",
          display: { xs: "none", md: "block" },
        }}
      >
        {["Profile", "Security", "Help Center", "Contact"].map(
          (item, index) => (
            <Tab
              label={item}
              key={item}
              {...a11yProps(index)}
              icon={<AccountCircleOutlined />}
              iconPosition="start"
            />
          ),
        )}
      </Tabs>
      <FormControl
        sx={{
          margin: "0 auto",
          minWidth: 80,
          display: { xs: "flex", md: "none" },
          width: "90%",
        }}
      >
        <Select
          value={value.toString()}
          onChange={handleSelectChange}
          sx={{
            fontSize: "16px",
            lineHeight: "24px",
            "& .MuiSelect-select": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            },
          }}
        >
          {["Profile", "Security", "Help Center", "Contact"].map(
            (item, index) => (
              <MenuItem
                key={item}
                value={index.toString()}
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>{initIcons[index]}</ListItemIcon>
                <ListItemText
                  sx={{
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {item}
                </ListItemText>
              </MenuItem>
            ),
          )}
        </Select>
      </FormControl>
      <TabPanel value={value} index={0}>
        <ProfileCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SecurityCard />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HelpCenter />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ContactCard />
      </TabPanel>
    </Box>
  );
}
