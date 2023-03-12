import React, { useState } from "react";

function Modal({ setOpen, open }) {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      {/* <!-- Modal overlay --> */}
      <div class="fixed inset-0 z-20 m-0 backdrop-blur"></div>
      {/* Modal container */}
      <div className="z-20 flex h-auto w-3/5 flex-col justify-between rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6">
          <h2 className="mb-4 border-b-2 pb-3 text-xl font-medium">
            Add a book
          </h2>
          <div className="m-0">
            <div className="flex flex-col sm:flex-row">
              <section className="ml-0 w-full sm:w-1/2">
                <form className="m-0">
                  <label className="m-0 block">
                    Title:
                    <input
                      type="text"
                      name="title"
                      className="w-full rounded"
                    />
                  </label>
                  <label className="m-0 block">
                    Author:
                    <input
                      type="text"
                      name="author"
                      className="w-full rounded"
                    />
                  </label>
                  <label className="m-0 block">
                    Library location:
                    <input
                      type="text"
                      name="library"
                      className="w-full rounded"
                    />
                  </label>
                </form>
              </section>
              <section className="m-0 mt-4 w-full sm:mt-0 sm:w-1/2">
                <label className="m-0 flex flex-wrap items-center">
                  Upload a photo:
                  <input type="file" onChange={onImageChange} />
                  <img src={image} alt="" className="m-0 mt-4 max-h-32" />
                </label>
              </section>
            </div>
          </div>
        </div>
        <div className="my-6 flex items-center justify-center">
          <button
            className="mr-4 rounded bg-gray-500 px-5 py-2 text-white hover:bg-gray-600"
            onClick={() => setOpen(!open)}
          >
            Cancel
          </button>
          <button className="rounded bg-blue-500 px-7 py-2 text-white hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
