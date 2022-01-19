import AccessTime from "@material-ui/icons/AccessTime";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

const BookDetail: React.FC<Props> = (props) => {
  const [bookDetail, setBookDetail] = useState<Book>({
    id: -1,
    url: "",
    name: "",
    author: "",
    duration: "",
    category: "",
  });

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/books/${id}`).then((res) => {
      console.log(res.data);
      setBookDetail(res.data);
    });
  }, []);
  let index = props.library.map((e) => e.id).indexOf(bookDetail.id);
  console.log(props.library);
  return (
    <>
      <div className="book-header-wrapper">
        <div className="book_header-container">
          <h5 className="book__subheading">Get the key ideas from</h5>
          <div className="row">
            <div className="col-md-8">
              <div className="book_header">
                <div className="book_header_title">{bookDetail.name}</div>
                <h2 className="book__header__subtitle">
                  Turning Your Business into an Enduring Great Company
                </h2>
                <div className="book__header__author">{bookDetail.author}</div>
                <div className="book_header_info">
                  <AccessTime /> {bookDetail.duration}
                </div>
                <div className="book_header_cta">
                  <button className="button button_header_read_button">
                    Read Now
                  </button>
                  {index > -1 ? (
                    <button
                      className="button button_header_finish_button"
                      data-testid="finishButton"
                      onClick={() => props.finishBook(bookDetail)}
                    >
                      Finish Reading
                    </button>
                  ) : (
                    <button
                      className="button button_header_finish_button"
                      data-testid="finishButton"
                      onClick={() => props.addToLibrary(bookDetail)}
                    >
                      Add to Library
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="book_header_cover">
                <img
                  src={bookDetail.url}
                  alt="Enterpreneurship"
                  className="book_header_picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetail;
