import React from "react";

function AddBook({ setOpen, open }) {
  return (
    <button
      className="mb-14 rounded-xl bg-gray-100 p-32 text-2xl font-light hover:bg-gray-200"
      onClick={() => setOpen(!open)}
    >
      +
    </button>
  );
}

export default AddBook;
