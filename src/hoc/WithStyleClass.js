// hoc purpose - to wrap style class around parent div
/* eslint no-undef: "error" */
import React from "react";

const withStyleClass = props => (
  <div className={props.classes}>{props.children}</div>
);
export default withStyleClass;
