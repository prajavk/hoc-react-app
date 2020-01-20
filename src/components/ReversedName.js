import React from "react";
import withReverseHoc from "./../hoc/withReverseHOC";

// const TestName = (props) => <span>{props.children}</span>;
const ReversedName = props => {
  return <div>{props.children}</div>;
};

export default withReverseHoc(ReversedName);
