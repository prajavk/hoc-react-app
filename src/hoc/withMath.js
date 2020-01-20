/* 
This example, getResultOperation() receives a function and returns a new one. So it is a higher-order function.
A higher-order component is a function that takes a component and returns a new component.
*/
// import React from "react";

const sum = (a, b) => a + b;
const multiplication = (a, b) => a * b;

// Our Higher-Order Function
const getResultOperation = op => (a, b) => {
  return `The ${op.name} of ${a} and ${b} is ${op(a, b)}`;
};

const getSumResult = getResultOperation(sum);
const getMultiplicationResult = getResultOperation(multiplication);

console.log(getSumResult(2, 5)); // The sum of 2 and 5 is 7
console.log(getMultiplicationResult(2, 5)); // The multiplication of 2 and 5 is 10

export default getResultOperation;
