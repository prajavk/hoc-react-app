import React, { Component } from "react";

const SonComponent = props => (
  <p> I am a true son. I have my father's "{this.props.quality}" . </p>
);

class FatherComponent extends Component {
  constructor(props) {
    super(props); // always call this first
    this.state = {};

    // custom method bindings here
    this.someFunction = this.someFunction.bind(this);
  }
  componentDidMount() {
    this.handleSomething();
  }

  incrementCount() {
    this.setState(state => {
      // Important: read `state` instead of `this.state` when updating.
      return { count: state.count + 1 };
    });
  }

  handleSomething() {
    // Let's say `this.state.count` starts at 0.
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();

    // If you read `this.state.count` now, it would still be 0.
    // But when React re-renders the component, it will be 3.
  }
  render() {
    return <SonComponent quality="Grey hair" />;
  }
}

export default FatherComponent;
