import React from "react";

function AddBook({ setOpen, open }) {
  return (
    <button
      className="mb-14 h-72 w-64 rounded-xl bg-gray-100 text-2xl font-light hover:bg-gray-200"
      onClick={() => setOpen(!open)}
    >
      +
    </button>
  );
}

export default AddBook;
