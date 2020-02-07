import React, { useRef, useEffect, useImperativeHandle } from "react";

function Fancy(props, forwardedRef) {
  const localRef = useRef();
  useImperativeHandle(forwardedRef, () => localRef.current);

  // useImperativeHandle should be used with forwardRef:
  // useImperativeHandle(ref, () => ({
  //   focus: () => {
  //     localRef.current.focus();
  //   }
  // }));

  useEffect(() => {
    // console.log("ref in component", localRef.current);
  }, []);
  return (
    <div ref={localRef} {...props}>
      {" "}
      Dummy Block{" "}
    </div>
  );
}

export const Dummy = React.forwardRef(Fancy);
