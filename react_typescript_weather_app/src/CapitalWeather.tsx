import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { CapitalWeatherProps } from "./App";

const CapitalWeather: React.FC<CapitalWeatherProps> = ({ capitalWeather }) => {
  return (
    <Box>
      <h1 data-testid="capital-weather-heading">Capital Weather Detail</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Temperature
              </TableCell>
              <TableCell align="right">{capitalWeather.temperature}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Weather Icons
              </TableCell>
              <TableCell align="right">
                <img src={capitalWeather.weather_icon} alt="Weather flag" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Wind Speed
              </TableCell>
              <TableCell align="right">{capitalWeather.wind_speed}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Precip
              </TableCell>
              <TableCell align="right">{capitalWeather.precip}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained">Back to Home</Button>
      </Link>
    </Box>
  );
};

export default CapitalWeather;
