import React from "react";
import { render, screen } from "@testing-library/react";
import { AppRoutes } from "./App";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(<AppRoutes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
