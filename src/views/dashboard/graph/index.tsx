import { Box, Button, Stack, Typography } from "@mui/material";
import { ReactNode, useMemo, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const generateData = (size: number) => {
  const res = [
    {
      index: 0,
      cost: 1000,
    },
  ];
  let i = 0;
  while (i++ < size) {
    const cost = res[i - 1].cost + Math.floor((Math.random() - 0.5) * 300);
    res.push({
      index: i,
      cost: cost,
    });
  }

  return res;
};

const ToggleButtonGroup = ({
  data,
  value,
  setValue,
}: {
  data: string[];
  value: any;
  setValue: (item: any) => void;
}) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
      }}
    >
      {data.map((item) => {
        if (item === value) {
          return (
            <Button
              color="inherit"
              variant="contained"
              onClick={() => setValue(item)}
              key={item}
            >
              {item}
            </Button>
          );
        } else {
          return (
            <Button
              color="inherit"
              variant="text"
              onClick={() => setValue(item)}
              key={item}
            >
              {item}
            </Button>
          );
        }
      })}
    </Stack>
  );
};

export function Graph() {
  const [type, setType] = useState("price");
  const [range, setRange] = useState("1H");

  const yAxis: ReactNode[] = [];

  for (let i = 80; i > 0; i -= 10) {
    yAxis.push(
      <Typography color="textPrimary" variant="h5">
        {i + "k"}
      </Typography>,
    );
  }

  const dataForChart = useMemo(() => {
    switch (range) {
      case "1H":
        return generateData(20);
      case "4H":
        return generateData(40);
      case "1D":
        return generateData(60);
      case "1M":
        return generateData(80);
    }
  }, [range, type]);

  return (
    <>
      <Box
        component="section"
        sx={{
          padding: { xs: "20px 10px" },
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            mb: "16px",
          }}
        >
          <ToggleButtonGroup
            data={["price", "chart"]}
            value={type}
            setValue={setType}
          />
          <ToggleButtonGroup
            data={["1H", "4H", "1D", "1M"]}
            value={range}
            setValue={setRange}
          />
        </Stack>
        <Stack direction="row">
          <Stack
            sx={{
              px: "15px",
              flexDirection: "column",
              height: "300px",
              justifyContent: "space-between",
            }}
          >
            {yAxis}
          </Stack>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              width={500}
              height={200}
              data={dataForChart}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <Tooltip />
              <Area
                type="linear"
                dataKey="cost"
                stroke="#ecb10eff"
                fill="#ffd25863"
                strokeWidth="3px"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Stack>
      </Box>
    </>
  );
}

