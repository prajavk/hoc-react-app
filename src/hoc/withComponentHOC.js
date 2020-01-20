// hoc component returns class component
import React from "react";

const withComponentHOC = WrappedComponent => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return HOC;
};

export default withComponentHOC;

// How to use HOC
// const MyComponent = () => <div> Test me </div>
// const SimpleHOC = withComponentHOC(MyComponent);
