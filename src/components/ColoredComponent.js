import React from "react";
import withColor from "../hoc/withColor";

const ColoredComponent = props => {
  const mystyle = {
    textAlign: "left",
    borderStyle: "ridge",
    borderLeft: "6px solid #000",
    backgroundColor: "#fff",
    color: props.color,
    borderColor: props.color
  };
  return <div style={mystyle}> Color code {props.color}</div>;
  // return <div style={{ borderColor: props.color }}> Random color {props.color}</div>;
};

export default withColor(ColoredComponent);
