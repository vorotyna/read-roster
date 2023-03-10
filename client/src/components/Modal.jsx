import React from "react";

function Modal({ props }) {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      {/* <!-- Modal overlay --> */}
      <div className="fixed inset-0 z-20 m-0 backdrop-blur"></div>
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
                  <label htmlFor="title" className="m-0 mb-2 block">
                    Title <span className="m-0 text-[#ff293ef2]">*</span>
                    <input
                      type="text"
                      name="title"
                      className="w-full rounded"
                      onChange={props.onBookChange("title")}
                    />
                  </label>
                  <label className="m-0 mb-2 block">
                    Author <span className="m-0 text-[#ff293ef2]">*</span>
                    <input
                      type="text"
                      name="author"
                      className="w-full rounded"
                      onChange={props.onBookChange("author")}
                    />
                  </label>
                  <label className="m-0 mb-2 block">
                    Library location
                    <span className="m-0 text-[#ff293ef2]">&nbsp;*</span>
                    <input
                      type="text"
                      name="library"
                      className="w-full rounded"
                      onChange={props.onBookChange("location")}
                    />
                  </label>
                  <label className="m-0 block">
                    Due date <span className="m-0 text-[#ff293ef2]">*</span>
                    <input
                      type="date"
                      name="due"
                      className="w-full rounded"
                      onChange={props.onBookChange("dueDate")}
                    />
                  </label>
                </form>
              </section>
              <section className="m-0 mt-4 w-full sm:mt-0 sm:w-1/2">
                <div className="m-0 flex flex-col">
                  <label className="m-0 mb-1">Due date alert methods</label>
                  <label className="m-0 mb-2 flex cursor-pointer items-center">
                    <div className="relative m-0 ">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={props.book.email}
                        onChange={props.onBookChange("email")}
                      />
                      <div
                        id="email-toggle"
                        className={
                          props.book.email
                            ? "ml-0 mr-2 h-8 w-12 rounded-full bg-blue-500"
                            : "ml-0 mr-2 h-8 w-12 rounded-full bg-gray-500"
                        }
                      ></div>
                      <div
                        className={
                          props.book.email
                            ? "dot absolute left-5 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"
                            : "dot absolute left-1 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"
                        }
                      ></div>
                    </div>
                    <div className="m-0 mr-2">Email</div>
                  </label>
                  <label className="m-0 mb-2 flex cursor-pointer items-center ">
                    <div className="relative m-0 ">
                      <input
                        type="checkbox"
                        className="sr-only"
                        onChange={props.onBookChange("SMS")}
                      />
                      <div
                        className={
                          props.book.SMS
                            ? "ml-0 mr-2 h-8 w-12 rounded-full bg-blue-500"
                            : "ml-0 mr-2 h-8 w-12 rounded-full bg-gray-500"
                        }
                      ></div>
                      <div
                        className={
                          props.book.SMS
                            ? "dot absolute left-5 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"
                            : "dot absolute left-1 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"
                        }
                      ></div>
                    </div>
                    <div className="m-0 mr-2">SMS</div>
                  </label>
                  <label className="m-0 mb-2 flex cursor-pointer items-center ">
                    <div className="relative m-0 ">
                      <input
                        type="checkbox"
                        className="sr-only"
                        onChange={props.onBookChange("calendar")}
                      />
                      <div
                        className={
                          props.book.calendar
                            ? "ml-0 mr-2 h-8 w-12 rounded-full bg-blue-500"
                            : "ml-0 mr-2 h-8 w-12 rounded-full bg-gray-500"
                        }
                      ></div>
                      <div
                        className={
                          props.book.calendar
                            ? "dot absolute left-5 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"
                            : "dot absolute left-1 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"
                        }
                      ></div>
                    </div>
                    <div className="m-0 mr-2">Calendar</div>
                  </label>
                  <label className="m-0 flex flex-wrap items-center">
                    Upload a photo
                    <span className="m-0 text-[#ff293ef2]">&nbsp;*</span>
                    <input type="file" onChange={props.onBookChange("image")} />
                    <img
                      src={props.book.image}
                      alt=""
                      className="m-0 mt-2 max-h-20"
                    />
                  </label>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="my-6 flex items-center justify-center">
          <button
            className="mr-4 rounded bg-gray-500 px-5 py-2 text-white hover:bg-gray-600"
            onClick={() => props.setOpen(!props.open)}
          >
            Cancel
          </button>
          <button
            className="rounded bg-blue-500 px-7 py-2 text-white hover:bg-blue-600"
            onClick={props.saveBook}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
