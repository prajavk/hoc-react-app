import React, { Component } from "react";
import MyChildOne from "../components/Box/MyChildOne";
import MyChildTwo from "../components/Box/MyChildTwo";
class StyleBoxApp extends Component {
  state = {
    myPropertyOne: "#1) props: From parent to the child",
    myPropertyTwo: "#2) props: From parent to the child"
  };
  myContainerStyle = {
    maxWidth: "400px",
    margin: "10px auto",
    padding: "5px 0 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  render() {
    return (
      <div style={this.myContainerStyle}>
        <MyChildOne myChildProps={this.state.myPropertyOne} />
        <MyChildTwo myChildProps={this.state.myPropertyTwo} />
      </div>
    );
  }
}

export default StyleBoxApp;
