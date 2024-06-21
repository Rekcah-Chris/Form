import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCloudUploadAlt,
  faChartLine,
  faPrint,
  faSearchPlus,
  faSearchMinus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTrashAlt as faTrashAltLight,
  faCloudUploadAlt as faCloudUploadAltLight,
  faChartLine as faChartLineLight,
} from "@fortawesome/free-regular-svg-icons";
import "./Style.css";

function Icons() {
  return (
    <div className="styles">
      {/* Using the icons in JSX */}
      <FontAwesomeIcon icon={faTrashAlt} />
      <FontAwesomeIcon icon={faCloudUploadAlt} />
      <FontAwesomeIcon icon={faChartLine} />
      <FontAwesomeIcon icon={faPrint} />
      <FontAwesomeIcon icon={faSearchPlus} />
      <FontAwesomeIcon icon={faSearchMinus} />

      {/* Using the light version of icons */}
      <FontAwesomeIcon icon={faTrashAltLight} />
      <FontAwesomeIcon icon={faCloudUploadAltLight} />
      <FontAwesomeIcon icon={faChartLineLight} />
    </div>
  );
}

export default Icons;
