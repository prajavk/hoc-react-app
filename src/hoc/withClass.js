// hoc purpose - adding a div with a certain css class around any element
// props distributed as new key,value pair
// If withClass is a functional component (not a class), then include the props parameter (as usual).
import React from "react";

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
