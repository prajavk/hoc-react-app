import React from "react";
import withWindowDimensions from "./../hoc/withWindowDimensions";

class MyComponent extends React.Component {
  render() {
    if (this.props.isMobileSized) return <p>It's short</p>;
    else return <p>It's not short</p>;
  }
}

export default withWindowDimensions(MyComponent);

// You can also "stack" HOCs if you have another you need to use
// withRouter(withWindowDimensions(MyComponent))
