import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

import "./Style.css";

function Report() {
  return (
    <div className="button-container">
      <button className="print-report-button">
        <span className="i-span">
          <FontAwesomeIcon icon={faPrint} />
        </span>
        Print Report
      </button>
    </div>
  );
}

export default Report;
