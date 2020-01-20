import React, { Component } from "react";
import ColoredComponent from "../components/ColoredComponent";

class ColorApp extends Component {
  render() {
    const sx = {
      root: {
        overflow: "hidden"
      },
      child: {
        width: "50%",
        margin: "16px auto",
        border: "1px solid #eee",
        boxShadow: "0 2px 3px #ccc",
        padding: "4px",
        textAlign: "left"
      }
    };
    return (
      <div style={sx.child}>
        <ColoredComponent someProp="Prop 1" />
        <ColoredComponent someProp="Prop 2" />
        <ColoredComponent someProp="Prop 3" />
      </div>
    );
  }
}

export default ColorApp;
