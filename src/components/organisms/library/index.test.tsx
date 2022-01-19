import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Library from ".";
import axios from "axios";

import { BrowserRouter } from "react-router-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
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

test("Lirary is loaded", () => {
  renderLibrary();
  const data = [
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
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));
});

test("Tab switch in Library", async () => {
  renderLibrary();
  const bookCardInLibrary = await screen.findByText("Finished");
  expect(bookCardInLibrary).toBeTruthy();
});

test("Tab switch", async () => {
  renderLibrary();
  const bookCardInLibrary = await screen.findAllByTestId("toggleTab");
  fireEvent.click(bookCardInLibrary[0]);
  fireEvent.click(bookCardInLibrary[1]);
});

test(" Cards Rendered", async () => {
  renderLibrary();
  const bookCardInLibrary = await screen.findAllByTestId("progressBar");
});
