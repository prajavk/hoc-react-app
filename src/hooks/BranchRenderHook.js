/* 
A hooks implementation could look something like this (assume useRequest is a nontrivial function that uses hooks to perform the request)
*/
import React, { useRequest } from "react";

// A simple component
const ErrorComponent = ({ error, ...otherProps }) => (
  <div {...otherProps}>Error as {error}!</div>
);

const LoadingComponent = ({ msg, ...otherProps }) => (
  <div {...otherProps}>Loading.. {msg}</div>
);

const ResultComponent = ({ result, ...otherProps }) => (
  <div {...otherProps}>{result}</div>
);

// Prop Mutation - You have a component that takes a prop foo but needs it transformed into bar before use.
const Result = ({ bar }) => <ResultComponent result={bar} />;

// custom function to transform result
const transform = input => {
  // convert input into output
  const output = <div> {input} </div>;
  return output;
};
const withBar = BaseComponent => ({ foo, ...props }) => (
  <BaseComponent {...props} bar={transform(foo)} />
);
export default withBar(Result);

export const Foo = ({ bar }) => {
  const { result, loading, error } = useRequest(bar);
  if (error) {
    return <ErrorComponent />;
  } else if (loading) {
    return <LoadingComponent />;
  }
  return <ResultComponent result={result} />;
};
