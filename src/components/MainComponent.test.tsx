import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import axiosMock from "axios";
import MainComponent from "./MainComponent";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);
function renderMainComponent() {
  render(
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}
describe("Main Component Testing", () => {
  test("Rendering Main Componet", async () => {
    renderMainComponent();
    const getContent = await screen.findByText(/My Library/i);
    expect(getContent).toBeInTheDocument();
  });
});
