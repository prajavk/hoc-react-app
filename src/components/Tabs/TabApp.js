// issue - Form field changes doesn't retain
import React from "react";
import TabSwitcher, { Tab, TabPanel } from "./TabSwitcher";

/* tab1 */
class Tab1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabA: props.tabA
    };
  }
  inputAOnChange = e => {
    this.setState({
      tabA: e.target.value
    });
  };
  render() {
    return (
      <div>
        A panel
        <input
          onChange={this.inputAOnChange}
          type="text"
          value={this.state.tabA}
          name="a"
        />
      </div>
    );
  }
}
/* tab2 */
class Tab2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabB: props.tabB
    };
  }

  inputBOnChange = e => {
    this.setState({
      tabB: e.target.value
    });
  };

  render() {
    return (
      <div>
        B panel:
        <input
          type="text"
          onChange={this.inputBOnChange}
          value={this.state.tabB}
          name="b"
        />
      </div>
    );
  }
}

// prelaod form with record
const initialState = {
  tabA: "a",
  tabB: "b"
};

class TabApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  // save form fields
  handleSubmit = event => {
    event.preventDefault();
    console.log("Form state", this.state);
    // call saveContact(this.state);
    this.setState(initialState);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h1>TabSwitcher with Compound Components</h1>
          <TabSwitcher>
            <TabPanel whenActive="a">
              <Tab1 tabA={this.state.tabA} />
            </TabPanel>
            <TabPanel whenActive="b">
              <Tab2 tabB={this.state.tabB} />
            </TabPanel>

            <Tab id="a">
              <button>a</button>
            </Tab>
            <Tab id="b">
              <button>b</button>
            </Tab>
          </TabSwitcher>
          <button> Submit Form </button>
        </form>
      </div>
    );
  }
}

export default TabApp;
