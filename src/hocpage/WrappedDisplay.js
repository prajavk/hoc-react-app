import React from "react";
import withSecretToLife from "./../hoc/withSecretToLife";

const DisplayTheSecret = props => (
  <div>The secret to life is {props.secretToLife}.</div>
);

const WrappedDisplay = withSecretToLife(DisplayTheSecret);

export default WrappedDisplay;
