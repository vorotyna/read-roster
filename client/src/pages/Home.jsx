import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import AddBook from "../components/AddBook";
import Modal from "../components/Modal";
import ExistingBook from "../components/ExistingBook";
import useBook from "../hooks/useBook";
import axios from "axios";
import { UserContext } from "../contexts/userContext";
import { saveCalendarEvent } from "../utils";

function Home() {
  // Set state to open or close the Modal
  const [open, setOpen] = useState(false);
  // Set state to post the new book to DB
  const [isSave, setIsSave] = useState(false);
  // Set state to the returned data from getAllBooksAndAlerts
  const [populate, setPopulate] = useState([]);

  // Custom hook which handles the new book's state
  const { book, onBookChange, saveBook, setBook } = useBook();

  // Import token context
  const { token } = useContext(UserContext);

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

  // Function that makes a post and get request to save the book and send SMS when none of the input fields are empty
  const handleSave = async () => {
    const isNotNull = Object.values(book).every((param) => param !== null);

    if (isNotNull) {
      try {
        if (book.SMS === true) {
          axios.get(`http://localhost:8001/api/sms-api/${token}`, {
            params: { book },
          });
        }

        if (book.email === true) {
          axios.get(`http://localhost:8001/api/email-api/${token}`, {
            params: { book },
          });
        }

        // Upload the photo to Cloudinary for future retrieval and storage
        const formData = new FormData();
        formData.append("file", book.photo);
        formData.append("upload_preset", "readroster");
        const photoUpload = await axios.post(
          "https://api.cloudinary.com/v1_1/deagszuv0/upload",
          formData
        );

        // POST to database using the returned secure_url from Cloudinary as the photoURL
        await axios.post("http://localhost:8001/api/books/new", {
          ...book,
          photoURL: photoUpload.data.secure_url,
        });
        setIsSave(false);
        setOpen(false);
        setBook({
          user_id: token,
          alert_time: "",
          title: null,
          author: null,
          location: null,
          due_date: null,
          email: false,
          SMS: false,
          photo: null,
          photoURL: null,
        });
      } catch (error) {
        console.error(error);
      }
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
          <Navbar />
          <h1 className="px-8 py-5">
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
          <Navbar />
          <h1 className="py-5 text-lg">
            Keep track of borrowed library books by adding them to your book
            roster and creating alerts!
          </h1>
          <div className="sm:gris-cols-1 grid gap-4 overflow-y-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AddBook setOpen={setOpen} open={open} />
            {populate.map((book, index) => (
              <ExistingBook
                index={index}
                book={book}
                key={index}
                handleRender={handleRender}
                saveCalendarEvent={saveCalendarEvent}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
