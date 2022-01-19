/**
 * @jest-environment jsdom
 */
import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavItems from ".";

test("renders NavBar Items", () => {
  render(<NavItems title="My Library" />);
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toBeInTheDocument();
});

test("renders NavBarItems Exlpore", () => {
  render(<NavItems title="My Library" />);
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toBeInTheDocument();
});

test("renders NavBar Items Account", () => {
  render(<NavItems title="My Library" />);
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toBeInTheDocument();
});
