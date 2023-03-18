import React, { useState } from "react";

function ExistingBook() {
  // Set state on hover so that the card flips
  const [flip, setFlip] = useState(false);

  return (
    <div className="m-0">
      <button
        className="m-0 flex h-72 w-64 cursor-auto rounded-xl p-0"
        onMouseEnter={() => setFlip(true)}
        onMouseLeave={() => setFlip(false)}
      >
        {flip ? (
          <div className="m-0 flex h-full w-full flex-col items-center justify-around rounded-xl bg-gray-100">
            <h1 className="mt-4 font-semibold">Current alert preferences:</h1>
            <div className="m-6 my-0 px-6">
              <label className="m-0 mb-2 flex cursor-pointer items-center">
                <div className="relative m-0 ">
                  <input type="checkbox" className="sr-only" />
                  <div
                    id="email-toggle"
                    className="ml-0 mr-2 h-8 w-12 rounded-full bg-gray-500"
                  ></div>
                  <div className="dot absolute left-1 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"></div>
                </div>
                <div className="m-0 mr-2">Email</div>
              </label>
              <label className="m-0 mb-2 flex cursor-pointer items-center ">
                <div className="relative m-0 ">
                  <input type="checkbox" className="sr-only" />
                  <div className="ml-0 mr-2 h-8 w-12 rounded-full bg-gray-500"></div>
                  <div className="dot absolute left-1 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"></div>
                </div>
                <div className="m-0 mr-2">SMS</div>
              </label>
              <label className="m-0 mb-2 flex cursor-pointer items-center ">
                <div className="relative m-0 ">
                  <input type="checkbox" className="sr-only" />
                  <div className="ml-0 mr-2 h-8 w-12 rounded-full bg-gray-500"></div>
                  <div className="dot absolute left-1 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"></div>
                </div>
                <div className="m-0 mr-2">Calendar</div>
              </label>
            </div>
            <button className="mx-auto mb-6 w-3/5 items-center rounded-full bg-[#ff293ef2] py-1 text-center">
              delete book
            </button>
          </div>
        ) : (
          <img
            src="alisa.png"
            alt=""
            className="m-0 h-72 w-64 rounded-xl object-cover"
          />
        )}
      </button>
      <div className="m-0 w-64">
        <h2 className="truncate p-0 px-2 text-center font-semibold">
          Liso Piso in Wonderland
        </h2>
        <p className="w-64 truncate text-center text-sm font-light italic">
          Luko S.E. Puko
        </p>
        <p className="w-64 text-center text-sm text-[#ff293ef2]">
          {" "}
          May 7, 2000
        </p>
      </div>
    </div>
  );
}

export default ExistingBook;
