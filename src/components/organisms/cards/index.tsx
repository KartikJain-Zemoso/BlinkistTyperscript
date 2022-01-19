import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from "@material-ui/icons/Add";

interface Book {
  id: number;
  url: string;
  name: string;
  author: string;
  duration: string;
  category: string;
}

interface Props {
  index: number;
  book: Book;
  click?: (book: Book) => void;
  finishBook?: (book: Book) => void;
}

const Cards: React.FC<Props> = (props) => {
  console.log("In Card" + props.index);

  return (
    <>
      <div className="col-md-4">
        <div className="card card-wrapper">
          <Link to={`/books/${props.book.id}`}>
            <img className="card-img-top" src={props.book.url} alt="Card cap" />
          </Link>
          <div className="card-body ">
            <h5 className="card-title">{props.book.name}</h5>
            <p className="card-text ">{props.book.author}</p>
            <p className="card-text ">
              {<AccessTimeIcon />}
              {props.book.duration}
            </p>
            <div className="row">
              <div className="col-md-12 p0">
                {props.index > -1 ? (
                  <>
                    {" "}
                    <span className="moreHoriz">
                      <MoreHorizIcon />
                    </span>
                    <br />
                    <div className="progress" data-testid="progressBar">
                      <div
                        className="progress-bar progressbar-width"
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </>
                ) : (
                  <button
                    className="addToLibrary"
                    data-testid="addButton"
                    onClick={() => {
                      if (props.click) props.click(props.book);
                    }}
                  >
                    {<AddIcon />} Add to Library
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
