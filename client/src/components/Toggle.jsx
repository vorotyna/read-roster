import React, { useState } from "react";

// This Toggle component is to build a toggle for alerts

function Toggle({ buttonTitle, book, updateAlerts, name }) {
  // Set the toggle state as the value of the appropriate alert name
  const [toggle, setToggle] = useState(book[buttonTitle]);

  // Function that handles a user changing alert preferences in ExistingBook
  const updateToggle = () => {
    setToggle(!toggle);
    updateAlerts(buttonTitle);
  };

  return (
    <label className="m-0 mb-2 flex w-1/2 cursor-pointer items-center">
      <div className="relative m-0">
        <input
          type="checkbox"
          onChange={() => updateToggle()}
          className="sr-only"
        />
        <div
          className={
            toggle
              ? "ml-0 mr-2 h-8 w-12 rounded-full bg-blue-500"
              : "ml-0 mr-2 h-8 w-12 rounded-full bg-gray-500"
          }
        ></div>
        <div
          className={
            toggle
              ? "dot absolute left-5 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"
              : "dot absolute left-1 top-1 ml-0 h-6 w-6 rounded-full bg-white transition"
          }
        ></div>
      </div>
      <div className="m-0 mr-2">{name}</div>
    </label>
  );
}

export default Toggle;
