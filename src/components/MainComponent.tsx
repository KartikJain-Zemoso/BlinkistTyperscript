import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./organisms/bookDetail";
import CardGrid from "./organisms/cardsGrid";
import Library from "./organisms/library";
import axios from "axios";
import Navigation from "./organisms/Navigation";

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
// Root component Of BlinkistApp
const MainComponent: React.FC = (props) => {
  const [library, setLibrary] = useState<LibraryO[]>([]);
  useEffect(() => {
    axios.get("http://localhost:8000/library").then((res) => {
      console.log(res);
      setLibrary(res.data);
    });
  }, []);
  const finishBook = (book: Book) => {
    axios
      .put(`http://localhost:8000/library/${book.id}`, {
        id: book.id,
        author: book.author,
        category: book.category,
        duration: book.duration,
        name: book.name,
        url: book.url,
        isFinished: true,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const addToLibrary = (book: Book) => {
    axios
      .post("http://localhost:8000/library", {
        id: book.id,
        author: book.author,
        category: book.category,
        duration: book.duration,
        name: book.name,
        url: book.url,
        isFinished: false,
      })
      .then((res) => {
        console.log(res);
        setLibrary([...library, res.data]);
        console.log(library);
      });
  };
  return (
    <>
      <div className="header-container">
        <Navigation />
      </div>
      <div className="header-container">
        <Routes>
          <Route
            path="/"
            element={
              <Library finishBook={finishBook} addToLibrary={addToLibrary} />
            }
          />
          <Route
            path="/library"
            element={
              <Library finishBook={finishBook} addToLibrary={addToLibrary} />
            }
          />
          <Route
            path="/books/:id"
            element={
              <BookDetail
                finishBook={finishBook}
                addToLibrary={addToLibrary}
                library={library}
              />
            }
          />
          <Route
            path="/category/enterpreneurship"
            element={
              <CardGrid
                finishBook={finishBook}
                addToLibrary={addToLibrary}
                library={library}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default MainComponent;
