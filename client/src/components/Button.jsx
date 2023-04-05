import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Button({ buttonTitle, onClick, book }) {
  return (
    <button
      className="mb-3 w-1/3 rounded bg-blue-200 p-2 px-4 hover:bg-blue-400"
      onClick={() => onClick(book)}
    >
      <span className="mr-2">
        <FontAwesomeIcon icon={faDownload} style={{ color: "#000000" }} />
      </span>
      {buttonTitle}
    </button>
  );
}

export default Button;
