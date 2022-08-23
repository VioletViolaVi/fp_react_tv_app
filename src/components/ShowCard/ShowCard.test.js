/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import ShowCard from "./index";

describe("ShowCard", () => {
  beforeEach(() => {
    render(
      <ShowCard data={{ summary: "Test description", name: "Test name" }} />
    );
  });

  it("Displays the appropriate description", () => {
    const description = screen.queryByRole("paragraph");

    expect(description).toBeInTheDocument();
    expect(description.textContent).toBe("Test description");
  });

  it("Does not display image element  when no image is provided", () => {
    const image = screen.queryByRole("img");
    expect(image).not.toBeTruthy();
  });
});
