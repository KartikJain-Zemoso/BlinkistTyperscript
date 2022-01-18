import { render, screen } from "@testing-library/react";
import NavItems from ".";

test("renders NavBar Items", () => {
  render(<NavItems title="My Library" />);
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toBeTruthy();
});

test("renders NavBarItems Exlpore", () => {
  render(<NavItems title="My Library" />);
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toBeTruthy();
});

test("renders NavBar Items Account", () => {
  render(<NavItems title="My Library" />);
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toBeTruthy();
});
