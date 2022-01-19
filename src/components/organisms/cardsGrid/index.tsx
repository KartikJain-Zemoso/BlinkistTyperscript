import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../cards";

interface Library {
  id: number;
  url: string;
  name: string;
  author: string;
  category: string;
  duration: string;
  isFinished: boolean;
}
interface Book {
  id: number;
  url: string;
  name: string;
  author: string;
  duration: string;
  category: string;
}
interface Props {
  library: Library[];
  finishBook: (book: Book) => void;
  addToLibrary: (book: Book) => void;
}
const CardGrid: React.FC<Props> = (props) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/books").then((res) => {
      console.log(res);
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="row">
      {books.map((book) => {
        let indexOfBook = -1;
        indexOfBook = props.library.map((e) => e.id).indexOf(book.id);

        return (
          <Cards
            book={book}
            index={indexOfBook}
            click={() => props.addToLibrary(book)}
            finishBook={props.finishBook}
          />
        );
      })}
    </div>
  );
};

export default CardGrid;
