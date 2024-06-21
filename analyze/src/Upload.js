import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

import "./Style.css";

function Upload() {
  return (
    <div className="button-container">
      <button className="upload-button">
        <span className="i-span">
          <FontAwesomeIcon icon={faCloudUploadAlt} />
        </span>
        Upload
      </button>
    </div>
  );
}
export default Upload;
