import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import App from "./App";
import CapitalWeather from "./CapitalWeather";

describe("Testing HomePage", () => {
  test("Testing Button and Input Field", () => {
    const app_component = render(<App />);
    const country_button = screen.getByTestId("country-btn");
    const country_input: any = screen
      .getByTestId("country-input")
      .querySelector("input");
    expect(country_button).toBeInTheDocument();
    expect(country_button).toBeDisabled();
    expect(country_input).toBeInTheDocument();
    fireEvent.change(country_input, { target: { value: "India" } });
    expect(country_button).not.toBeDisabled();
    fireEvent.change(country_input, { target: { value: "" } });
    expect(country_button).toBeDisabled();
    fireEvent.change(country_input, { target: { value: "India" } });
    expect(country_button).not.toBeDisabled();
    expect(country_input.value).toBe("India");
  });

  test("Testing Redirecting Componenet", async () => {
    const app_component = render(<App />);
    const country_button = screen.getByTestId("country-btn");
    const country_input: any = screen
      .getByTestId("country-input")
      .querySelector("input");
    fireEvent.change(country_input, { target: { value: "India" } });
    fireEvent.click(country_button);
    await waitFor(() => screen.findByTestId("country-details"));
    expect(screen.getByTestId("country-details")).toBeInTheDocument();
    expect(screen.getByTestId("country-table")).toBeInTheDocument();
  });
});
describe("Testing Capital Components", () => {
  test("Testing Capital Weather Component", async () => {
    const app_component = render(
      <Router>
        <CapitalWeather
          capitalWeather={{
            temperature: 0,
            weather_icon: "",
            wind_speed: 0,
            precip: 0,
          }}
        />
      </Router>
    );
    expect(
      app_component.getByTestId("capital-weather-heading")
    ).toBeInTheDocument();
  });
});
