import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import AddBook from "../../components/AddBook";
import Modal from "../../components/Modal";

function Home() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(false);
  const [SMS, setSMS] = useState(false);
  const [calendar, setCalendar] = useState(false);

  let props = {
    open,
    setOpen,
    email,
    setEmail,
    SMS,
    setSMS,
    calendar,
    setCalendar,
  };

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
