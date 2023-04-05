import React, { useState } from "react";

function Toggle({ buttonTitle, book, updateAlerts, name }) {
  const [toggle, setToggle] = useState(book[buttonTitle]);

  const updateToggle = () => {
    setToggle(!toggle);
    updateAlerts(buttonTitle);
  };

  return (
    <div className="m-0 mb-2 flex items-center">
      <div className="relative m-0 ">
        <input
          type="checkbox"
          className="sr-only"
          onChange={() => updateToggle()}
        />
        <div
          id="toggle"
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
    </div>
  );
}

export default Toggle;
