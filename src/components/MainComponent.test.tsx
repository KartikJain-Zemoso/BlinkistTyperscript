import React from "react";
import { render, screen } from "@testing-library/react";

import MainComponent from "./MainComponent";

describe("Main Component Testing", () => {
  test("Rendering Main Componet", async () => {
    render(<MainComponent />);
    const getContent = await screen.findByText(/My Librar/i);
    expect(getContent).toBeInTheDocument();
  });
});
