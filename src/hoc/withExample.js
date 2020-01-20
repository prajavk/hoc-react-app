import React from "react";

/* eslint-disable react/display-name */

function withExample(BaseComponent) {
  return function(props) {
    // cross cutting logic here
    return <BaseComponent {...props} />;
  };
}

// How to use HOC
const testComp = props => <span> Hello </span>;
const simpleHOC = withExample(testComp);
console.log(simpleHOC);

/* render props
render(){
  <FetchData render={(data) => {
    return <p>{data}</p>
  }} />
}

render() {
<wrapper>
{ isFunction(props.children) ? props.children(propsEtc) : props.children }
</wrapper>
}
 */
