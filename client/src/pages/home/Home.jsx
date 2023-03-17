import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import AddBook from "../../components/AddBook";
import Modal from "../../components/Modal";
import useBook from "../../hooks/useBook";
import axios from "axios";

function Home() {
  // Set state to open or close the Modal
  const [open, setOpen] = useState(false);
  // Set state to post the new book to DB
  const [isSave, setIsSave] = useState(false);

  // Custom hook which handles the new book's state
  const { book, onBookChange, saveBook } = useBook();

  // Props object that gets passed in to Modal
  let props = {
    book,
    onBookChange,
    saveBook,
    open,
    setOpen,
    isSave,
    setIsSave,
  };

  // Function that makes a post request to save the book when none of the input fields are empty
  const handleSave = async () => {
    const isNotNull = Object.values(book).every(
      (param) => param !== null && param !== ""
    ); // Need to add a default photo URL to books, otherwise need to make it not null

    if (isNotNull) {
      try {
        await axios.post("http://localhost:8001/api/books/new", book);
      } catch (error) {
        console.error(error);
      }
      setIsSave(false);
      setOpen(false);
    }
  };

  // Function the makes a get request when the page mounts and when isSave changes
  const handleRender = async () => {
    try {
      await axios.get("http://localhost:8001/api/books");
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
    <div>
      {open ? (
        <>
          <Modal props={props} />
          <Navbar />
          <h1 className="px-8 py-5 text-lg">
            Keep track of borrowed library books by adding them to your book
            roster!
          </h1>
          <div className="grid grid-cols-4 gap-4 overflow-y-auto">
            <AddBook setOpen={setOpen} open={open} />
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <h1 className="px-8 py-5 text-lg">
            Keep track of borrowed library books by adding them to your book
            roster!
          </h1>
          <div className="grid grid-cols-4 gap-4 overflow-y-auto">
            <AddBook setOpen={setOpen} open={open} />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
