import React from "react";

import Person from "./PersonProps";

export const PersonContext = React.createContext(false);

/* class-based component
we can't pass click handler which change state in parent
If we use ES7 click binding which is inefficent for some apps
 */
class PersonApp extends React.Component {
  state = {
    counter: 0,
    authenticated: false,
    persons: [
      { id: "a", name: "Sachin", age: 20 },
      { id: "b", name: "Dravid", age: 21 },
      { id: "c", name: "Dhoni", age: 22 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // this updates new props using state update
  switchHandler = newName => {
    // Donot do this
    // this.state.persons[0].name = "Dhoni";
    this.setState({
      authenticated: false,
      persons: [
        { id: "a", name: newName, age: 30 },
        { id: "b", name: "Dravid", age: 21 },
        { id: "c", name: "Dhoni ", age: 22 }
      ]
    });
  };

  // two way binding case
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.persons[personIndex]; //bad syntax
    // const person = Object.assign({}, this.state.persons[personIndex]); //ES6 - right

    const person = {
      ...this.state.persons[personIndex]
    }; //ES7

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });

    /*
    this.setState({
      persons: [
        { name: "Sachin", age: 30 },
        { name: event.target.value, age: 21 },
        { name: "Dhoni ", age: 22 }
      ]
    }); */
  };

  /* Es7 - return output dom to this class */
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    /* Best solution to immutate state here */
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        counter: prevState.counter + 1
      };
    });
  };

  deleteHandler = personIndex => {
    const persons = this.state.persons.slice(); // ES6 - create copy of persons
    // const npersons = [...this.state.persons]; //ES7 spread operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  //props drilling
  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  /* react execute this render() */
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deleteHandler(index)}
                name={person.name}
                position={index}
                age={person.age}
                key={person.id}
                // authenticated={this.state.authenticated}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}

          {/* two-way binding
          <Person
            changed={this.nameChangeHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchHandler.bind(this, "Ramesh!")}
          >
            My Hobbies: coding, chating.
          </Person>
          */}
        </div>
      );
    }

    return (
      <div>
        <h1>Udemy - Props, State, List, context topics </h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons{" "}
        </button>
        <button onClick={this.loginHandler}>Login</button>
        <button
          style={style}
          onClick={this.switchHandler.bind(this, "Tendulkar")}
        >
          Switch Name{" "}
        </button>
        <button onClick={event => this.switchHandler("Sachin ES7 synatax!!")}>
          Switch ES7{" "}
        </button>

        <PersonContext.Provider value={this.state.authenticated}>
          {persons}
        </PersonContext.Provider>
      </div>
    );
  }
}

export default PersonApp;
