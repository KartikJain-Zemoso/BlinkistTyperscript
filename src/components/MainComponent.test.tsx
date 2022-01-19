import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import MainComponent from "./MainComponent";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");

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
    const data = [
      {
        id: 1,
        author: "Carl Reader",
        category: "entrepreneurship",
        duration: "13-minutes read",
        name: "Boss It",
        url: "https://images.blinkist.io/images/books/6155c3ed6cee070008752e82/1_1/470.jpg",
      },
    ];
    const resp = { data: data };
    mockedAxios.put.mockResolvedValue(Promise.resolve(resp));
    mockedAxios.post.mockResolvedValue(Promise.resolve(resp));
    renderMainComponent();

    const getContent = await screen.findAllByText(/My Library/i);
    expect(getContent[0]).toBeInTheDocument();
  });
  test("Rendering Main Componet and Testing", async () => {
    renderMainComponent();

    const getContent = await screen.findAllByText(/My Library/i);
    expect(getContent[0]).toBeInTheDocument();
  });
});
