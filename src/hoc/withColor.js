import React from "react";

const withColor = BaseComponent => {
  class EnhancedComponent extends React.Component {
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";

      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    }

    render() {
      return <BaseComponent color={this.getRandomColor()} {...this.props} />;
    }
  }

  return EnhancedComponent;
};

export default withColor;
