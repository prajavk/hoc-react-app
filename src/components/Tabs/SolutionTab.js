import React from "react";
import TabSwitcher, { Tab, TabPanel } from "./TabSwitcher";

/* tab1 */
const Tab1 = ({ onChangeCallback, tabA }) => {
  const onChange = e => {
    onChangeCallback(e.target.value);
  };

  return (
    <div>
      A panel <br />
      <input type="text" onChange={onChange} value={tabA} name="a" />
    </div>
  );
};

/* tab2 */
const Tab2 = ({ onChangeCallback, tabB }) => {
  const onChange = e => {
    onChangeCallback(e.target.value);
  };

  return (
    <div>
      B panel <br />
      <input type="text" onChange={onChange} value={tabB} name="b" />
    </div>
  );
};

const initialState = {
  activeTabId: "a",
  tabA: "a",
  tabB: "b"
};

class SolutionTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  // save form fields
  handleSubmit = event => {
    event.preventDefault();
    console.log("Form state", this.state);
    // callback to save record
  };
  handleClear = event => {
    event.preventDefault();
    // reset form fields if needed
    this.setState(initialState);
  };

  onTabAInputChange = value => {
    this.setState({
      tabA: value
    });
  };

  onTabBInputChange = value => {
    this.setState({
      tabB: value
    });
  };

  onTabClick = value => {
    this.setState({
      activeTabId: value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>TabSwitcher with Compound Components</h1>
        <TabSwitcher
          activeTabId={this.state.activeTabId}
          onChangeCallback={this.onTabClick}
        >
          <TabPanel whenActive="a">
            <Tab1
              onChangeCallback={this.onTabAInputChange}
              tabA={this.state.tabA}
            />
          </TabPanel>
          <TabPanel whenActive="b">
            <Tab2
              onChangeCallback={this.onTabBInputChange}
              tabB={this.state.tabB}
            />
          </TabPanel>
          <Tab id="a">
            <button>a</button>
          </Tab>
          <Tab id="b">
            <button>b</button>
          </Tab>
        </TabSwitcher>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

export default SolutionTab;
