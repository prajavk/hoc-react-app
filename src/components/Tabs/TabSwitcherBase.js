// https://blog.logrocket.com/guide-to-react-compound-components-9c4b3eb482e9
// boiler plate code
import React, { Component, createContext } from "react";

const context = createContext({});

const { Provider, Consumer } = context;

const Tab = props => <Consumer>{() => props.children}</Consumer>;

const TabPanel = props => <Consumer>{() => props.children}</Consumer>;

class TabSwitcher extends Component {
  state = {
    activeTabId: "a"
  };

  render() {
    return (
      <Provider
        value={{
          activeTabId: this.state.activeTabId
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default TabSwitcher;
export { Tab, TabPanel };
