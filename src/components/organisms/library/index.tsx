import React, { useEffect, useState } from "react";

import Cards from "../cards";
import axios from "axios";
import "./library.css";
interface Book {
  id: number;
  url: string;
  name: string;
  author: string;
  duration: string;
  category: string;
}
interface LibraryO {
  id: number;
  url: string;
  name: string;
  author: string;
  category: string;
  duration: string;
  isFinished: boolean;
}
interface Props {
  finishBook: (book: Book) => void;
  addToLibrary: (book: Book) => void;
}

const Library: React.FC<Props> = (props) => {
  const [currentTab, toggleTab] = useState("current");
  const [library, setLibrary] = useState<LibraryO[]>([]);
  let currentBooks: LibraryO[] = [];

  let finishedBooks: LibraryO[] = [];
  if (library.length > 0) {
    currentBooks = library.filter((book) => book.isFinished === false);
    finishedBooks = library.filter((book) => book.isFinished === true);
  }
  let currentBookMap: string | null | JSX.Element[];
  currentBookMap = "No Books Available";
  let finishedBooksMap: string | null | JSX.Element[];
  finishedBooksMap = "No Books Available";
  if (currentBooks.length > 0) {
    currentBookMap = currentBooks.map((book) => {
      let indexOfBook = -1;
      indexOfBook = library.map((e) => e.id).indexOf(book.id);
      return (
        <Cards
          book={book}
          index={indexOfBook}
          click={props.addToLibrary}
          finishBook={props.finishBook}
        />
      );
    });
  }
  if (finishedBooks.length > 0) {
    finishedBooksMap = finishedBooks.map((book) => {
      let indexOfBook = -1;
      indexOfBook = library.map((e) => e.id).indexOf(book.id);
      return (
        <Cards
          book={book}
          index={indexOfBook}
          click={props.addToLibrary}
          finishBook={props.finishBook}
        />
      );
    });
  }
  console.log(currentBooks);
  console.log(finishedBooks);
  useEffect(() => {
    axios.get("http://localhost:8000/library").then((res) => {
      console.log(res.data);
      setLibrary(res.data);
    });
  }, []);
  return (
    <>
      <h1>My Library</h1>
      <div className="row reading-tab">
        <div className="col-md-3 library-wrapper">
          <div
            data-testid="toggleTab"
            className={
              currentTab === "current" ? "reading reading-active" : "reading"
            }
            onClick={() => toggleTab("current")}
          >
            Currently Reading
          </div>
        </div>
        <div className="col-md-3 library-wrapper">
          <div
            data-testid="toggleTab"
            className={
              currentTab === "finished" ? "reading reading-active" : "reading"
            }
            onClick={() => toggleTab("finished")}
          >
            Finished
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 "></div>
        {currentTab === "current" ? currentBookMap : finishedBooksMap}
      </div>
    </>
  );
};

export default Library;
