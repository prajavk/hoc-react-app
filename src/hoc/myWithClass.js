import React from "react";
const myWithClass = (MyWrappedComponent, myParameterStyle) => {
  const myWithClassStyle = {
    marginBottom: "5px",
    padding: "5px 0",
    backgroundColor: "#ff0",
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
    fontSize: "16px",
    fontWeight: "bold"
  };
  const myPinkBackgroundStyle = {
    padding: "4px",
    backgroundColor: "#fcf",
    textTransform: "uppercase"
  };

  return props => (
    <div style={myWithClassStyle}>
      <div style={myParameterStyle}>
        <MyWrappedComponent
          {...props}
          myPinkBackgroundStyleProps={myPinkBackgroundStyle}
        />
      </div>
    </div>
  );
};
export default myWithClass;
// any MyWrappedComponent will have this (yellow background) CSS style applied.
// if you use a DOM elements as a wrapper & it's not a <div>,
//                watch for a console warning or non-applied results.
// {...props} resolves the broken props connection introduced by myWithClass.
// without {...props},  props can come in,  but they can't go out.
