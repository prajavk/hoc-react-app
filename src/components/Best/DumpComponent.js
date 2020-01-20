//I'll have to write some methods on the Dumb component, however:

import { PureComponent } from "react";
import PropTypes from "prop-types";

class DumbComponent extends PureComponent {
  static propTypes = {
    someProperty: PropTypes.bool.isRequired,
    anotherProperty: PropTypes.string.isRequired,
    someAction: PropTypes.func.isRequired,
    anotherAction: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleSomeElementClick = this.handleSomeElementClick.bind(this);
    this.handleAnotherElementChange = this.handleAnotherElementChange.bind(
      this
    );
  }

  handleSomeElementClick(event) {
    //  <-- I used to have those in my
    event.preventDefault(); //            smart components and pass it
    const { someAction } = this.props; // down, but now it's defined
    someAction(); //                      in the dumb ones
  }

  handleAnotherElementChange(event) {
    const { name, value } = event.target,
      { anotherAction } = this.props;
    anotherAction({
      [name]: value
    });
  }
}

export default DumbComponent;
