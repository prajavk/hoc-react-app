import React from "react";

const withReverseHoc = PassedComponent => ({ children, ...props }) => (
  <PassedComponent {...props}>
    {children
      .split("")
      .reverse()
      .join("")}
  </PassedComponent>
);

export default withReverseHoc;

// const name = (props) => <span>{props.children}</span>;
// const reversedName = withReverseHoc(name);
// input as <reversedName>Hello</reversedName>
// output as <span>olleH</span>
