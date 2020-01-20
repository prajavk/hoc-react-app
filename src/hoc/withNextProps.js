import React from "react";

const withNextProps = WrappedComponent => {
  class CustomComponent extends React.Component {
    state = {
      title: null
    };
    render() {
      const newProps = {
        title: "New Header",
        footer: false,
        showFeatureX: false,
        showFeatureY: true
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  }
  return CustomComponent;
};

export default withNextProps;
