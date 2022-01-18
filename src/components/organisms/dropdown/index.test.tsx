import { render } from "@testing-library/react";
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
