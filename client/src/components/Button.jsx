import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Button({ buttonTitle, onClick, book, className }) {
  return (
    <button className={className} onClick={() => onClick(book)}>
      <span className="mr-2">
        <FontAwesomeIcon icon={faDownload} style={{ color: "#000000" }} />
      </span>
      {buttonTitle}
    </button>
  );
}

export default Button;
