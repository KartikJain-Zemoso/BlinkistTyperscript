import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import BookDetail from ".";
import "@testing-library/jest-dom";
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
  {
    id: 5,
    name: "Beyond Entrepreneuship 2.0",
    url: "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg",
    author: "Jim Collins",
    duration: "15-minutes read",
    category: "entrepreneurship",
    isFinished: true,
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
  const text = await screen.findByText(
    /Turning Your Business into an Enduring Great Company/i
  );
  expect(text).toBeInTheDocument();
});

test("Clicking Finish Book In Book Detail", async () => {
  render(<MockBookDetail />);
  const finishButton = await screen.findByRole("button", {
    name: "Finish Reading",
  });
  expect(finishButton).toBeTruthy();
  fireEvent.click(finishButton);
});

test("Click Finish Book In Book Detail", async () => {
  render(<MockBookDetail />);
  const finishButton = await screen.findByText(/Finish Reading/i);
  expect(finishButton).toBeInTheDocument();
});
