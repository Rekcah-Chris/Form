import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faSearchMinus } from "@fortawesome/free-solid-svg-icons";

import "./Style.css";

function Zoominout() {
  return (
    <div classname="zoom">
      <div className="zoomall">
        <button className="zoomin">
          <span className="i-span">
            <FontAwesomeIcon icon={faSearchPlus} />
          </span>{" "}
          Zoom In
        </button>
        <button className="zoomout">
          <span className="i-span">
            <FontAwesomeIcon icon={faSearchMinus} />
          </span>
          Zoom Out
        </button>
      </div>
    </div>
  );
}

export default Zoominout;
