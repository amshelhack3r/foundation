import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Social(props) {
  return <FontAwesomeIcon icon={["fab", props.brand]} size="2x" />;
}
