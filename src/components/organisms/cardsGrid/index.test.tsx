import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import CardGrid from ".";
import { BrowserRouter } from "react-router-dom";
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
