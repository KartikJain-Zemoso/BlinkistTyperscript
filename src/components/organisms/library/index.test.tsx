import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Library from ".";
import { BrowserRouter } from "react-router-dom";

interface LibraryO {
  id: number;
  url: string;
  name: string;
  author: string;
  category: string;
  duration: string;
  isFinished: boolean;
}
const library = [
  {
    id: 3,
    author: "Charles Seife",
    category: "entrepreneurship",
    duration: "12-minutes read",
    name: "Zero",
    url: "https://images.blinkist.io/images/books/6183be696cee070007a5cd39/1_1/470.jpg",
    isFinished: true,
  },
  {
    id: 4,
    author: "Tom Esinmann",
    category: "entrepreneurship",
    duration: "15-minutes read",
    name: "Why StartUp Fails",
    url: "https://images.blinkist.io/images/books/616814026cee0700089d6a92/1_1/470.jpg",
    isFinished: true,
  },
];

function addToLibrary() {}
function finishBook() {}
function renderLibrary() {
  render(
    <BrowserRouter>
      <Library addToLibrary={addToLibrary} finishBook={finishBook} />
    </BrowserRouter>
  );
}

test("Book Card should be displayed", () => {
  renderLibrary();
});
