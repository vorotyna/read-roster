import React, { useState } from "react";

function ExistingBook() {
  // Set state on hover so that the card flips
  const [flip, setFlip] = useState(false);

  return (
    <div className="m-0">
      <button
        className="m-0 h-72 w-64 rounded-xl p-0"
        onMouseEnter={() => setFlip(true)}
        onMouseLeave={() => setFlip(false)}
      >
        {!flip ? (
          <div className="bg-red m-0">
            I'll appear when you hover over the button.
          </div>
        ) : (
          <img
            src="alisa.png"
            alt=""
            className="m-0 h-72 w-64 rounded-xl object-cover"
          />
        )}
      </button>
      <h2 className="w-64 overflow-hidden truncate px-2 text-center font-semibold">
        Liso Piso in Wonderland
      </h2>
      <p className="w-64 px-2 text-center font-medium text-[#ff293ef2]">
        May 7, 2000
      </p>
    </div>
  );
}

export default ExistingBook;
