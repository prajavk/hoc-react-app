import React, { Fragment } from "react";
import myWithClass from "../../hoc/myWithClass";
const myChildOneStyle = {
  color: "#07a",
  fontSize: "16px"
};
const MyChildOne = props => (
  <Fragment>
    <div>MyChild Two component</div>
    <div>{props.myChildProps}</div>
  </Fragment>
);
export default myWithClass(MyChildOne, myChildOneStyle);
// above: note the CSS style is applied in myWithClass.js, not here.
// here, myWithClass() partially breaks the props connection.
