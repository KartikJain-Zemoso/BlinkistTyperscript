import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import BookDetail from ".";
import { BrowserRouter } from "react-router-dom";

const Library = [
  {
    id: 1,
    author: "Carl Reader",
    category: "entrepreneurship",
    duration: "13-minutes read",
    name: "Boss It",
    url: "https://images.blinkist.io/images/books/6155c3ed6cee070008752e82/1_1/470.jpg",
    isFinished: false,
  },
];

const addToLibrary = jest.fn();
const finishBook = jest.fn();
const MockBookDetail = () => {
  return (
    <BrowserRouter>
      <BookDetail
        library={Library}
        finishBook={finishBook}
        addToLibrary={addToLibrary}
      />
    </BrowserRouter>
  );
};

test("Rendering Book Detail", async () => {
  render(<MockBookDetail />);
  const text = screen.getByText(
    /Turning Your Business into an Enduring Great Company/i
  );
  expect(text).toBeInTheDocument();
});

test("Clicking Finish Book In Book Detail", async () => {
  render(<MockBookDetail />);
  const finishButton = await screen.findByTestId("finishButton");
  expect(finishButton).toBeInTheDocument();
  fireEvent.click(finishButton);
});
