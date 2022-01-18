import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookDetail from ".";
interface Book {
  id: number;
  url: string;
  name: string;
  author: string;
  duration: string;
  category: string;
  isFinished: boolean;
}
const books = [
  {
    id: 2,
    name: "Dropshipping",
    author: "James Moore",
    duration: "30",
    category: "Entrepreneurship",
    url: "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
    isFinished: true,
  },
  {
    id: 3,
    name: "The Bully Pulpit",
    author: "Goodwin",
    duration: "30",
    category: "Politics",
    url: "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
    isFinished: false,
  },
];

const addToLibrary = () => {};
const finishBook = () => {};

function renderBookData(books: Book[]) {
  render(
    <BrowserRouter>
      <BookDetail
        library={books}
        addToLibrary={addToLibrary}
        finishBook={finishBook}
      />
    </BrowserRouter>
  );
}

describe("Book Card", () => {
  describe("Book in the Library", () => {
    test("Book Details should be displayed", () => {
      renderBookData(books);
      const bookCardInLibrary = screen.getByText("Dropshipping");
      expect(bookCardInLibrary).toBeTruthy();
      expect(bookCardInLibrary).toBeVisible();
    });
  });
});
