/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import Header from "./index";

describe("Header component", () => {
  it("Displays a h1 w/ appropriate text", () => {
    render(<Header />);

    const heading = screen.queryByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
