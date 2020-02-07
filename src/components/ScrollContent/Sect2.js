import React, { useRef, useImperativeHandle } from "react";

function Section2(props, forwardedRef) {
  const sectionRef = useRef();

  // useImperativeHandle(forwardedRef, () => sectionRef.current);
  // useImperativeHandle should be used with forwardRef:
  useImperativeHandle(forwardedRef, () => ({
    scrollIntoView: () => {
      sectionRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
  }));

  return (
    <div ref={sectionRef} className="part2">
      <h2>This is Section 2!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

export const Sect2 = React.forwardRef(Section2);
