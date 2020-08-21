import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { DateTime } from "luxon";
import Long from "long";

import { TemporaryExposureKeyExport } from "../lib/protobuf/TemporaryExposureKeyExport";
import uint8ArrayToHex from "../lib/uint8ArrayToHex";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function parseUnixTimestamp(unixTimestamp: number | Long): string {
  if (Long.isLong(unixTimestamp)) {
    throw new Error("Long value for UNIX timestamp is unsupported.");
  }
  const dt = DateTime.fromSeconds(unixTimestamp as number);
  return dt.toLocaleString({
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });
}

function Row({ tekExport, batchNum }: { tekExport: TemporaryExposureKeyExport; batchNum: number }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{parseUnixTimestamp(tekExport.startTimestamp)}</TableCell>
        <TableCell>{parseUnixTimestamp(tekExport.endTimestamp)}</TableCell>
        <TableCell align="right">{tekExport.keys.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Temporary Exposure Keys
              </Typography>
              <Table size="small" aria-label="teks">
                <TableHead>
                  <TableRow>
                    <TableCell>TEK</TableCell>
                    <TableCell align="right">Interval start</TableCell>
                    <TableCell align="right">Transmission risk level</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tekExport.keys.map((tek, idx) => (
                    <TableRow key={batchNum + "-" + idx}>
                      <TableCell component="th" scope="row">
                        <code>{uint8ArrayToHex(tek.keyData, " ")}</code>
                      </TableCell>
                      <TableCell align="right">{parseUnixTimestamp(tek.rollingStartIntervalNumber * 600)}</TableCell>
                      <TableCell align="right">{tek.transmissionRiskLevel}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function Dashboard({ tekExports }: { tekExports: TemporaryExposureKeyExport[] }): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Start</TableCell>
            <TableCell>End</TableCell>
            <TableCell align="right">Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tekExports.map((tekExport, idx) => (
            <Row key={idx} tekExport={tekExport} batchNum={idx} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Dashboard;
