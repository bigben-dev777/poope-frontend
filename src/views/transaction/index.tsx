import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Button, Chip, ChipProps, Stack, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

interface TransactionInterface {
  id: number;
  type: "buy" | "swap" | "withdraw";
  amount: number;
  date: string;
  status: "ongoing" | "completed" | "failed";
}

function createData(): TransactionInterface[] {
  const res: TransactionInterface[] = [];
  for (let i = 0; i < 10; i++) {
    const now = new Date().toDateString();
    res.push({
      id: 14525156 + 1,
      type: "buy",
      amount: 100,
      date: now,
      status: "ongoing",
    });
  }

  return res;
}

const StyledCompletedChip = styled((props: ChipProps) => <Chip {...props} />)(
  ({ theme }) => ({
    borderRadius: "100px",
    color: "white",
    padding: "4px 6px",
    background: "hsla(152, 61%, 46%, 1)",
    ...theme.applyStyles("dark", {
      background: "hsla(152, 61%, 46%, 0.16)",
      color: "hsla(152, 61%, 46%, 1)",
    }),
  }),
);

const StyledFailedChip = styled((props: ChipProps) => <Chip {...props} />)(
  ({ theme }) => ({
    borderRadius: "100px",
    color: "white",
    padding: "4px 6px",
    background: "hsla(0, 100%, 72%, 1)",
    ...theme.applyStyles("dark", {
      background: "hsla(0, 100%, 72%, 0.16)",
      color: "hsla(0, 100%, 72%, 1)",
    }),
  }),
);

const StyledOnGoingChip = styled((props: ChipProps) => <Chip {...props} />)(
  ({ theme }) => ({
    borderRadius: "100px",
    color: "white",
    padding: "4px 6px",
    background: "hsla(29, 92%, 54%, 1)",
    ...theme.applyStyles("dark", {
      background: "hsla(29, 92%, 54%, 0.16)",
      color: "hsla(29, 92%, 54%, 1)",
    }),
  }),
);

export default function BasicTable() {
  const histories = React.useMemo(() => createData(), []);

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="flex-end"
        sx={{
          padding: "10px 32px 24px 32px",
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          endIcon={<KeyboardArrowDownOutlined />}
          sx={{
            boxShadow: "none",
          }}
        >
          Newest
        </Button>
      </Stack>
      <TableContainer
        component={Paper}
        sx={{
          width: "auto",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {histories.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell
                  align="left"
                  sx={{
                    "&:first-letter": {
                      textTransform: "uppercase",
                    },
                  }}
                >
                  {row.type}
                </TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  {row.status === "ongoing" && (
                    <StyledOnGoingChip
                      variant="filled"
                      color="error"
                      label={row.status[0].toUpperCase() + row.status.slice(1)}
                    />
                  )}
                  {row.status === "failed" && (
                    <StyledFailedChip
                      variant="filled"
                      color="error"
                      label={row.status[0].toUpperCase() + row.status.slice(1)}
                    />
                  )}
                  {row.status === "completed" && (
                    <StyledCompletedChip
                      variant="filled"
                      color="error"
                      label={row.status[0].toUpperCase() + row.status.slice(1)}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
