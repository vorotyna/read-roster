import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AddBook from "../components/AddBook";
import Modal from "../components/Modal";
import ExistingBook from "../components/ExistingBook";
import useBook from "../hooks/useBook";
import axios from "axios";

function Home({ token, setToken }) {
  // Set state to open or close the Modal
  const [open, setOpen] = useState(false);
  // Set state to post the new book to DB
  const [isSave, setIsSave] = useState(false);
  // Set state to the returned data from getAllBooksAndAlerts
  const [populate, setPopulate] = useState([]);

  // Custom hook which handles the new book's state
  const { book, onBookChange, saveBook, setBook } = useBook();

  // Props object that gets passed in to Modal
  let props = {
    book,
    onBookChange,
    saveBook,
    open,
    setOpen,
    isSave,
    setIsSave,
    setBook,
  };

  // Function that makes a post request to save the book when none of the input fields are empty
  const handleSave = async () => {
    const isNotNull = Object.values(book).every((param) => param !== null);

    if (isNotNull) {
      try {
        await axios.post("http://localhost:8001/api/books/new", book);
      } catch (error) {
        console.error(error);
      }
      setIsSave(false);
      setOpen(false);
      setBook({
        title: null,
        author: null,
        location: null,
        due_date: null,
        email: false,
        SMS: false,
        calendar: false,
        photo: null,
      });
    }
  };

  // Function the makes a get request when the page mounts or/and when isSave changes
  const handleRender = async () => {
    try {
      const booksInfo = await axios.get("http://localhost:8001/api/books", {
        headers: {
          Token: token,
        },
      });
      setPopulate(booksInfo.data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect that if isSave is true, will handleSave() and then handleRender(). Otherwise, just handleRender()
  useEffect(() => {
    if (isSave) {
      handleSave();
    }

    handleRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSave]);

  return (
    <div className="mx-28">
      {open ? (
        <>
          <Modal props={props} />
          <Navbar token={token} setToken={setToken} />
          <h1 className="px-8 py-5 text-lg">
            Keep track of borrowed library books by adding them to your book
            roster!
          </h1>
          <div className="grid grid-cols-4 gap-4 overflow-y-auto">
            <AddBook setOpen={setOpen} open={open} />
            {populate.map((book, index) => (
              <ExistingBook
                index={index}
                book={book}
                handleRender={handleRender}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <Navbar token={token} setToken={setToken} />
          <h1 className="py-5 text-lg">
            Keep track of borrowed library books by adding them to your book
            roster!
          </h1>
          <div className="sm:gris-cols-1 grid gap-4 overflow-y-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AddBook setOpen={setOpen} open={open} />
            {populate.map((book, index) => (
              <ExistingBook
                index={index}
                book={book}
                key={index}
                handleRender={handleRender}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
