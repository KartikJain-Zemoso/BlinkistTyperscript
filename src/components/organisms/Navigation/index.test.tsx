import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from ".";
function renderDropDown() {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}
test("Rendering Navigation", () => {
  renderDropDown();
});

test("Toggle Nav", () => {
  renderDropDown();
  const toggleNav = screen.getByTestId("toggleNav");
  fireEvent.click(toggleNav);
});
