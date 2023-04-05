import React from "react";
import Button from "./Button";
import { saveCalendarEvent } from "../utils";

function Modal({ props }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* <!-- Modal overlay --> */}
      <div className="fixed inset-0 m-0 backdrop-blur"></div>
      {/* Modal container */}
      <div className="z-20 flex h-auto w-3/5 flex-col justify-between rounded-lg bg-white p-8 shadow-xl">
        <div className="mx-8 mb-6">
          <h2 className="mb-4 border-b-2 pt-2 pb-3 text-xl font-medium">
            Add a book
          </h2>
          <div className="flex flex-col sm:flex-row">
            <section className="mr-4 w-full sm:w-1/2">
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
                <div className="flex flex-row justify-between">
                  <label className="m-0 block w-1/2 pr-1">
                    Due date <span className="m-0 text-[#ff293ef2]">*</span>
                    <input
                      type="date"
                      name="due"
                      className="w-full rounded"
                      onChange={props.onBookChange("due_date")}
                    />
                  </label>
                  <label className="m-0 mb-2 block w-1/2 pl-1">
                    Location
                    <span className="m-0 text-[#ff293ef2]">&nbsp;*</span>
                    <input
                      type="text"
                      name="library"
                      className="w-full rounded"
                      onChange={props.onBookChange("location")}
                    />
                  </label>
                </div>
                <label className="m-0 block">
                  Set alert time <span className="m-0 text-[#ff293ef2]">*</span>
                  <input
                    type="datetime-local"
                    name="due"
                    className="w-full rounded"
                    onChange={props.onBookChange("alert")}
                  />
                </label>
              </form>
            </section>
            <section className="ml-4 mt-4 w-full sm:mt-0 sm:w-1/2">
              <div className="m-0 flex flex-col">
                <label className="m-0">Due date alert methods </label>
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
                <label className="m-0 mt-3 flex flex-wrap items-center">
                  Upload a cover photo
                  <span className="m-0 text-[#ff293ef2]">&nbsp;*</span>
                  <input type="file" onChange={props.onBookChange("photo")} />
                  <img
                    src={props.book.photo}
                    alt=""
                    className="m-0 mt-1 max-h-28"
                  />
                </label>
              </div>
            </section>
          </div>
        </div>
        <div className="mb-6 mt-2 flex flex-col items-center justify-center">
          {props.book.title !== null &&
          props.book.location !== null &&
          props.book.due_date !== null ? (
            <Button
              buttonTitle={"Calendar Event"}
              onClick={saveCalendarEvent}
              book={props.book}
            />
          ) : (
            <></>
          )}
          <section>
            <button
              className="mr-4 rounded-full bg-gray-500 px-7 py-2 text-white hover:bg-gray-600"
              onClick={() => {
                props.setOpen(!props.open);
                props.setBook({
                  title: null,
                  author: null,
                  location: null,
                  due_date: null,
                  email: false,
                  SMS: false,
                  calendar: false,
                  photo: null,
                });
              }}
            >
              Cancel
            </button>
            <button
              className="rounded-full bg-blue-500 px-9 py-2 text-white hover:bg-blue-600"
              onClick={() => {
                props.saveBook();
                props.setIsSave(true);
              }}
            >
              Save
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Modal;
