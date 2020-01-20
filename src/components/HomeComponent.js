// https://css-tricks.com/working-with-events-in-react/
import React from "react";
import UserInfo from "./Best/UserInfo";
/*
const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">HELLO REACT</h1>
    </div>
  );
};
export default Home;
*/
class Home extends React.Component {
  state = {
    /* Initial State */
    input: "",
    reversedText: ""
  };
  /* handleChange() function to set a new state for input */
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      input: value
    });
  };

  /* handleReverse() function to reverse the input and set that as new state for reversedText*/
  handleReverse = event => {
    event.preventDefault();
    const text = this.state.input;
    this.setState({
      reversedText: text
        .split("")
        .reverse()
        .join("")
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* handleReverse() is called when the form is submitted */}
        <form onSubmit={this.handleReverse}>
          <div className="jumbotron">
            <h1 className="display-3">
              {/* Render input entered */}
              {this.state.input}
            </h1>
            <div>
              {/* handleChange() is triggered when text is entered */}
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                placeholder="Enter a text"
              />
              <button>Reverse Text</button>
            </div>
            {/* Render reversed text */}
            <h3>Reversed Text: {this.state.reversedText}</h3>
          </div>
        </form>
        <UserInfo />
      </React.Fragment>
    );
  }
}

export default Home;
