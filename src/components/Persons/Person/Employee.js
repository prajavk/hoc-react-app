// Employee.js
import React, { Component } from "react";

import classes from "./Person.css";
import AuxWrapper from "../../../hoc/AuxWrapper";
import withClass from "../../../hoc/withClass";

class Employee extends Component {
  constructor(props) {
    super(props);
    console.log("[Employee.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Employee.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Employee.js] Inside componentDidMount()");
  }

  render() {
    console.log("[Employee.js] Inside render()");
    return (
      <AuxWrapper>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </AuxWrapper>
    );
  }
}

export default withClass(Employee, classes.Person);
