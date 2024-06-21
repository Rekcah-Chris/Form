import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

import "./Style.css";

function Analysis() {
  return (
    <div className="button-container">
      <button className="analyze-button">
        <span className="i-span">
          <FontAwesomeIcon icon={faChartLine} />
        </span>
        Analyze
      </button>
    </div>
  );
}

export default Analysis;
