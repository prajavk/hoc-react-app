import React from "react";

export default class extends React.Component {
  state = {
    currentInputValue: ""
  };

  onAdded = input => {
    this.setState({
      currentInputValue: input.target.value
    });
  };

  onButtonClick = () => {
    this.props.onAdded(this.state.currentInputValue);
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.onAdded} />
        <button onClick={this.onButtonClick}>Add</button>
      </React.Fragment>
    );
  }
}
