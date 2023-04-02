import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";

function ExistingBook({ book, index }) {
  // Set state on hover so that the card flips
  const [flip, setFlip] = useState(false);

  const updateAlerts = async (alertType) => {
    book[alertType] = !book[alertType];
    console.log(book);
    // Function to make a PUT request to update alerts
    try {
      const booksInfo = await axios.put(
        "http://localhost:8001/api/alerts/update_alert",
        {
          book_id: book.book_id,
          SMS: book.sms,
          calendar: book.calendar,
          email: book.email,
        }
      );
      console.log("BooksInfo", booksInfo.data);
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
              <h1 className="mt-4 font-semibold">Current alert preferences:</h1>
              <div className="m-6 my-0 px-6">
                <Button
                  buttonTitle={"email"}
                  book={book}
                  updateAlerts={updateAlerts}
                />
                <Button
                  buttonTitle={"sms"}
                  book={book}
                  updateAlerts={updateAlerts}
                />
                <Button
                  buttonTitle={"calendar"}
                  book={book}
                  updateAlerts={updateAlerts}
                />
              </div>
              <button className="mx-auto mb-6 w-3/5 items-center rounded-full bg-[#ff293ef2] py-1 text-center hover:bg-[#ff293eb6]">
                delete book
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
