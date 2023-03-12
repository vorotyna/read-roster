import React from "react";

function Modal({ setOpen, open }) {
  return (
    <div class="fixed inset-0 z-50 flex items-center justify-center">
      {/* Modal container */}
      <div class="rounded-lg bg-white p-8 shadow-lg">
        <h2 class="mb-4 text-xl font-medium">Add a book</h2>
        <p class="mb-8">Modal content goes here.</p>
        <div class="flex justify-end">
          <button
            class="mr-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            onClick={() => setOpen(!open)}
          >
            Cancel
          </button>
          <button class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
