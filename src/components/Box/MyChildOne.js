import React from "react";
import myWithClass from "../../hoc/myWithClass";

const myChildOneStyle = { color: "#c00" };
const MyChildOne = props => (
  <div style={props.myPinkBackgroundStyleProps}>
    <div>MyChild One component</div>
    <div>{props.myChildProps}</div>
  </div>
);
export default myWithClass(MyChildOne, myChildOneStyle);
// above: note the CSS style is applied in myWithClass.js, not here.
// here, myWithClass() partially breaks the props connection.
