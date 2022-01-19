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
  const retrieveBooks = async () => {
    const result = await axios.get("http://localhost:8000/books");
    console.log(result);
    return result.data;
  };
  useEffect(() => {
    const getData = async () => {
      let books = await retrieveBooks();
      setBooks(books);
    };
    getData();
  }, []);

  return (
    <div className="row">
      {books.map((book) => {
        console.log(book.name);
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
