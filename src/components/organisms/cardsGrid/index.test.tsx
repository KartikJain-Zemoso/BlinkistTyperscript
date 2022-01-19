import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import CardGrid from ".";
import axios from "axios";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
const Library = [
  {
    id: 1,
    name: "Boss It",
    url: "https://images.blinkist.io/images/books/6155c3ed6cee070008752e82/1_1/470.jpg",
    author: "Carl Reader",
    duration: "13-minutes read",
    category: "entrepreneurship",
    isFinished: true,
  },
];

const addToLibrary = jest.fn();
const finishBook = jest.fn();
const MockCardGrid = () => {
  return (
    <BrowserRouter>
      <CardGrid
        library={Library}
        finishBook={finishBook}
        addToLibrary={addToLibrary}
      />
    </BrowserRouter>
  );
};
describe("testing Card Grid", () => {
  test("Rendering CardGrid With Books", async () => {
    const data = [
      {
        id: 1,
        author: "Carl Reader",
        category: "entrepreneurship",
        duration: "13-minutes read",
        name: "Boss It",
        url: "https://images.blinkist.io/images/books/6155c3ed6cee070008752e82/1_1/470.jpg",
      },
      {
        id: 5,
        name: "Beyond Entrepreneuship 2.0",
        url: "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
        author: "Jim Collins",
        duration: "15-minutes read",
        category: "entrepreneurship",
      },
    ];
    const resp = { data: data };
    mockedAxios.get.mockResolvedValue(Promise.resolve(resp));
    render(<MockCardGrid />);
  });

  test("Rendering CardGrid", async () => {
    render(<MockCardGrid />);
    const addButton = await screen.findAllByTestId("addButton");
    fireEvent.click(addButton[0]);
    const progressBar = screen.getByTestId("progressBar");
    expect(progressBar).toBeInTheDocument();
  });
  test("Rendering Card", async () => {
    render(<MockCardGrid />);
    const text = await screen.findByText("Carl Reader");
    expect(text).toBeInTheDocument();
  });
});
