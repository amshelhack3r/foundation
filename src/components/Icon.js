import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon(props) {
  let size = props.size ? props.size : "2x";
  if (props.type == null) {
    return <FontAwesomeIcon icon={props.name} size={size} />;
  }
  return <FontAwesomeIcon icon={[props.type, props.name]} size={size} />;
}
