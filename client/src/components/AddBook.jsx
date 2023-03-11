import React, { useState } from "react";

function AddBook() {
  const [open, setOpen] = useState(false);

  return (
    <button
      className="rounded-xl bg-gray-100 p-32 text-2xl font-light hover:bg-gray-200"
      onClick={() => setOpen(!open)}
    >
      +
    </button>
  );
}

export default AddBook;
