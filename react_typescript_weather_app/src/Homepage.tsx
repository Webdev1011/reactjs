import React from "react";
import { HompageProps } from "./App";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Homepage: React.FC<HompageProps> = ({
  textChanged,
  btnDisabled,
  country,
  getCountryDetails,
}) => {
  const redirectToCountry = () => {
    getCountryDetails();
  };
  return (
    <Box>
      <TextField
        data-testid="country-input"
        helperText=""
        onChange={textChanged}
        id="demo-helper-text-misaligned"
        label="Enter country"
        value={country}
      />
      <Button
        data-testid="country-btn"
        variant="contained"
        onClick={redirectToCountry}
        disabled={btnDisabled}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Homepage;
