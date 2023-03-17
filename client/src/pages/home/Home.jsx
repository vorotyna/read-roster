import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import AddBook from "../../components/AddBook";
import Modal from "../../components/Modal";
import useBook from "../../hooks/useBook";
import axios from "axios";

function Home() {
  const [open, setOpen] = useState(false);
  const [isSave, setIsSave] = useState(false);

  const { book, onBookChange, saveBook } = useBook();

  let props = {
    book,
    onBookChange,
    saveBook,
    open,
    setOpen,
    isSave,
    setIsSave,
  };

  const handleSave = async () => {
    const isNotNull = Object.values(book).every(
      (param) => param !== null && param !== ""
    ); // Need to add a default photo URL to books, otherwise need to make it not null
    console.log("isnot null", isNotNull);
    if (isNotNull) {
      try {
        const saveSuccess = await axios.post(
          "http://localhost:8001/api/books/new",
          book
        );
        if (saveSuccess.data.success === true) {
          console.log("SUCCESS-ADDED");
        }
      } catch (error) {
        console.error(error);
      }
      setIsSave(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isSave) {
      handleSave();
    }
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
