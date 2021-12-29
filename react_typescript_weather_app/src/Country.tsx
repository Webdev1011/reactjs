import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CountryProps } from "./App";
import { Link } from "react-router-dom";

const Country: React.FC<CountryProps> = ({
  countryData,
  getCapitalDetails,
}) => {
  const fetchCapitalDetails = async () => {
    getCapitalDetails();
  };
  return (
    <Box>
      <h1 data-testid="country-details">Country Details</h1>
      <TableContainer component={Paper} data-testid="country-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Country Name
              </TableCell>
              <TableCell align="right">{countryData.name}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Capital
              </TableCell>
              <TableCell align="right">{countryData.capital}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Population
              </TableCell>
              <TableCell align="right">{countryData.population}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Lattitude
              </TableCell>
              <TableCell align="right">{countryData.lat}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Longitude
              </TableCell>
              <TableCell align="right">{countryData.lng}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Flag
              </TableCell>
              <TableCell align="right">
                <img src={countryData.flag} alt="country flag" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        data-testid="back_to_home_btn"
      >
        <Button variant="contained">Back to Home</Button>
      </Link>
      <Button
        variant="contained"
        data-testid="get-capital-weather"
        onClick={fetchCapitalDetails}
      >
        Capital Weather
      </Button>
    </Box>
  );
};

export default Country;
