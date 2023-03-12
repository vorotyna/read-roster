import React from "react";

function Modal({ setOpen, open }) {
  return (
    <div class="fixed inset-0 z-20 flex items-center justify-center">
      {/* <!-- Modal overlay --> */}
      <div class="fixed inset-0 z-20 m-0 backdrop-blur"></div>
      {/* Modal container */}
      <div class="z-20 flex h-auto w-3/5 flex-col justify-between rounded-lg bg-white p-8 shadow-lg">
        <div>
          <h2 class="mb-4 border-b-2 pb-3 text-xl font-medium">Add a book</h2>
          <div className="mb-6 flex flex-row items-start justify-around">
            <section>
              <form>
                <label className="m-0">
                  Title:
                  <input type="text" name="title" />
                </label>
                <label className="m-0">
                  Author:
                  <input type="text" name="author" />
                </label>
                <label className="m-0">
                  Library location:
                  <input type="text" name="library" />
                </label>
              </form>
            </section>
            <section className="m-0 mt-1">
              <input type="file" />
            </section>
          </div>
        </div>
        <div class="my-6 flex items-center justify-center">
          <button
            class="mr-4 rounded bg-gray-500 px-5 py-2 text-white hover:bg-gray-600"
            onClick={() => setOpen(!open)}
          >
            Cancel
          </button>
          <button class="rounded bg-green-500 px-7 py-2 text-white hover:bg-green-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
