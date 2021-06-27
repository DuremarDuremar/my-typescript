import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("render Header", () => {
  it("render Header component", () => {
    render(<Header />);
    screen.debug();
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
