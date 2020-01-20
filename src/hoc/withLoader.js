import React from "react";

const withLoader = (BaseComponent, apiUrl) => {
  class EnhancedComponent extends React.Component {
    state = {
      data: null
    };
    componentDidMount() {
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          this.setState({ data });
        });
    }
    render() {
      if (!this.state.data) {
        return <div>Loading ...</div>;
      }
      return <BaseComponent data={this.state.data} {...this.props} />;
    }
  }
  return EnhancedComponent;
};

export default withLoader;
