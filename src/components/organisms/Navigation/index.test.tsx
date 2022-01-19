import React from "react";
import { render } from "@testing-library/react";
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
