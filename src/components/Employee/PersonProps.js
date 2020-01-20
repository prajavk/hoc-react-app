import React from "react";

import { PersonContext } from "./PersonApp";

/* stateless or function component - this is dynamic due to props
Passing method reference between components
two binding
*/
const person = props => {
  return (
    <div className="person">
      {/* props.authenticated ? <p> I'm authenticated ! </p> : null */}
      <PersonContext.Consumer>
        {auth => (auth ? <p> I'm authenticated! </p> : null)}
      </PersonContext.Consumer>
      <p onClick={props.click}>
        I'm <b>{props.name} </b> and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
