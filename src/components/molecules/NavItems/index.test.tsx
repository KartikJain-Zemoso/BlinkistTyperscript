import { render, screen } from "@testing-library/react";
import NavItems from ".";

test("renders NavBar Items", () => {
  render(<NavItems title="My Library" />);
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toContain("My Library");
});

test("renders NavBarItems Exlpore", () => {
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toContain("My Library");
});

test("renders NavBar Items Account", () => {
  const linkElement = screen.getByText("My Library");
  expect(linkElement).toContain("My Library");
});
