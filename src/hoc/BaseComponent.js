/*
HoC’s operate by wrapping a base component with some function called an enhancer. That enhancer can transform or affect a base component in any number of ways. 
*/
import React from "react";
import { compose } from "recompose";

// A simple component
const HelloComponent = ({ name, ...otherProps }) => (
  <div {...otherProps}>Hello {name}!</div>
);
// An enhancer that will set a name prop on
// a base component to "New Name"
const withNameOverride = BaseComponent => props => (
  <BaseComponent {...props} name="New Name" />
);
// An enhancer that will apply some inline
// styling to a base component
const withStyling = BaseComponent => props => (
  <BaseComponent
    {...props}
    style={{
      fontWeight: 700,
      color: "green"
    }}
  />
);

// how to use Higher Order Components
// const EnhancedHello1 = withNameOverride(HelloComponent);
// const EnhancedHello2 = withStyling(HelloComponent);
export const EnhancedHello3 = compose(
  withNameOverride,
  withStyling
)(HelloComponent);

// export default [withStyling, withNameOverride, HelloComponent];
