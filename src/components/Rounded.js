import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Rounded() {
  return (
    <div className="rounded-btn mx-auto mt-5">
      <FontAwesomeIcon icon={faAngleDown} size="3x" />
    </div>
  );
}
