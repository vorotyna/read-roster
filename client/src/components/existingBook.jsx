import React, { useState } from "react";
import Toggle from "./Toggle";
import axios from "axios";
import Button from "./Button";

// This ExistingBook component populates the Home page with the existing books in the DB for a user

function ExistingBook({ book, index, handleRender, saveCalendarEvent }) {
  // Set state on hover so that the card flips to show alerts
  const [flip, setFlip] = useState(false);

  // Function to make a PUT request to update alerts
  const updateAlerts = async (alertType) => {
    book[alertType] = !book[alertType];

    // If alert is set to FALSE then send request to find the alerts info in the DB
    if (!book[alertType]) {
      await axios.get(
        `http://localhost:8001/api/${alertType}-api/${book.book_id}`
      );
    }

    // If alert is set to TRUE then send request to create a new alert and push info in the DB
    if (book[alertType]) {
      await axios.post(
        `http://localhost:8001/api/${alertType}-api/${book.user_id}`,
        book
      );
    }

    try {
      await axios.put("http://localhost:8001/api/alerts/update_alert", {
        book_id: book.book_id,
        SMS: book.sms,
        email: book.email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function that makes a delete request to delete an existing book
  const handleDelete = async () => {
    if (book.sms) {
      await axios.get(`http://localhost:8001/api/sms-api/${book.book_id}`);
    }

    try {
      await axios.delete(`http://localhost:8001/api/books/${book.id}`);
      handleRender();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-0">
      <div
        className="m-0 flex h-72 w-64 cursor-auto rounded-xl p-0"
        onMouseEnter={() => setFlip(true)}
        onMouseLeave={() => setFlip(false)}
      >
        {flip ? (
          <div className="relative m-0 flex h-full w-full flex-col items-center justify-around rounded-xl bg-cover bg-center ">
            <img
              src={book.photo}
              key={index}
              alt="cover"
              className=" absolute z-0 m-0 h-72 w-64 rounded-xl object-cover opacity-50 blur-sm"
            ></img>
            <div className="relative m-0 flex h-full w-full flex-col items-center justify-around rounded-xl bg-cover bg-center">
              <h1 className="mb-2 mt-4 font-semibold">Alert Preferences:</h1>
              <div className="m-6 my-0 px-6">
                <Toggle
                  buttonTitle={"email"}
                  name={"Email"}
                  book={book}
                  updateAlerts={updateAlerts}
                />
                <Toggle
                  buttonTitle={"sms"}
                  name={"SMS"}
                  book={book}
                  updateAlerts={updateAlerts}
                />
                <Button
                  buttonTitle={"Calendar"}
                  book={book}
                  name={"Calendar"}
                  onClick={saveCalendarEvent}
                  className={
                    "m-0 flex w-full cursor-pointer items-center rounded bg-blue-200 p-2 px-4 hover:bg-blue-400"
                  }
                />
              </div>
              <button
                className="mx-auto mt-4 mb-6 items-center rounded-full bg-[#ff293ef2] px-12 py-2 text-center hover:bg-[#e32b3d]"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <img
            src={book.photo}
            key={index}
            alt=""
            className="m-0 h-72 w-64 rounded-xl object-cover"
          />
        )}
      </div>
      <div className="m-0 w-64">
        <h2 className="truncate p-0 px-2 text-center font-semibold">
          {book.title}
        </h2>
        <p className="w-64 truncate text-center text-sm font-light italic">
          {book.author}
        </p>
        <p className="w-64 text-center text-sm text-[#ff293ef2]">
          {" "}
          {book.due_date.split("T")[0]}
        </p>
      </div>
    </div>
  );
}

export default ExistingBook;
