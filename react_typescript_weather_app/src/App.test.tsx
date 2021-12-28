import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

describe("Testing HomePage", () => {
  test("check country button functionality", () => {
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
    // act(async () => {
    //   fireEvent.click(country_button);
    //   const countryTable = await screen.findByTestId("country-table");
    //   expect(countryTable).not.toBeInTheDocument();
    // });
  });
});
