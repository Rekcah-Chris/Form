import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./Style.css";

function Delete() {
  return (
    <div className="button-container">
      <button className="delete-button">
        <span className="i-span">
          <FontAwesomeIcon icon={faTrashAlt} />
        </span>{" "}
        Delete
      </button>
    </div>
  );
}

export default Delete;
