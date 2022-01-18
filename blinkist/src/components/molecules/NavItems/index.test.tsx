import React from "react";

import { render, screen } from "@testing-library/react";
import NavItems from ".";

test("renders NavBar Items", () => {
  render(<NavItems title="My Library" />);
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toBeInTheDocument();
});

test("renders NavBarItems Exlpore", () => {
  render(<NavItems title="Explore" />);
  const linkElement = screen.getByText("Explore");
  expect(linkElement).toBeInTheDocument();
});

test("renders NavBar Items Account", () => {
  render(<NavItems title="Account" />);
  const linkElement = screen.getByText("Account");
  expect(linkElement).toBeInTheDocument();
});
