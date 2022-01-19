import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NaviagtionDropDown from ".";
function renderDropDown() {
  render(
    <BrowserRouter>
      <NaviagtionDropDown onClick={clicked} />
    </BrowserRouter>
  );
}
const clicked = () => {};
test("Rendering DropDown", () => {
  renderDropDown();
});

test("Rendering DropDown Toogle", () => {
  renderDropDown();
  const toggleDropDown = screen.getAllByTestId("toggleDropdown");
  expect(toggleDropDown.length).toBe(2);
  fireEvent.click(toggleDropDown[0]);
  fireEvent.click(toggleDropDown[1]);
});
