import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Cards from ".";
import { BrowserRouter } from "react-router-dom";
interface Book {
  id: number;
  url: string;
  name: string;
  author: string;
  duration: string;
  category: string;
}
const books = [
  {
    id: 2,
    name: "Dropshipping",
    author: "James Moore",
    duration: "30",
    category: "Entrepreneurship",
    url: "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
  },
  {
    id: 3,
    name: "The Bully Pulpit",
    author: "Goodwin",
    duration: "30",
    category: "Politics",
    url: "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
  },
];

function renderBookData(index: number, books: Book) {
  render(
    <BrowserRouter>
      <Cards book={books} index={index} />
    </BrowserRouter>
  );
}

function addToLibrary() {}

function renderBookDataWithFunction(index: number, books: Book) {
  render(
    <BrowserRouter>
      <Cards book={books} index={index} click={addToLibrary} />
    </BrowserRouter>
  );
}

describe("Book Card", () => {
  describe("Book in the Library", () => {
    test("Book Card should be displayed", () => {
      renderBookData(-1, books[0]);
      const bookCardInLibrary = screen.getByText("Dropshipping");
      expect(bookCardInLibrary).toBeTruthy();
    });

    test("Book Card should have a add button", () => {
      renderBookData(-1, books[0]);
      const bookCardInLibrary = screen.getByRole("button");
      expect(bookCardInLibrary).toBeTruthy();
    });
    test("Book Card should not have a add button", () => {
      renderBookData(-1, books[1]);
      const bookCardInLibrary = screen.getByRole("button", {
        name: "Add to Library",
      });
      expect(bookCardInLibrary).toBeTruthy();

      fireEvent.click(bookCardInLibrary);
    });
    test("Book Card should have be clicked", () => {
      renderBookDataWithFunction(1, books[0]);
      const bookCardInLibrary = screen.getByTestId("progressBar");
      expect(bookCardInLibrary).toBeTruthy();
    });
    test("Book Card should be added to Lirary", () => {
      renderBookDataWithFunction(-1, books[0]);
      const bookCardInLibrary = screen.getByRole("button", {
        name: "Add to Library",
      });
      fireEvent.click(bookCardInLibrary);
    });
  });
});
