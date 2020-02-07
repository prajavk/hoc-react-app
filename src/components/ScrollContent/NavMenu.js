import React from "react";
import { PropTypes } from "prop-types";
class NavMenu extends React.Component {
  scrollHere = e => {
    const refName = e.target.className;
    this.props.onClick(refName);
  };

  render() {
    const { scollToLinkA, scollToLinkB, scollToLinkC } = this.props;

    return (
      <nav className="link-nav">
        <ul>
          <li>
            <div onClick={scollToLinkA}>
              <p>Div1</p>
            </div>
          </li>
          <li>
            <div onClick={scollToLinkB}>
              <p>Div2</p>
            </div>
          </li>
          <li>
            <div onClick={scollToLinkC}>
              <p>Div3</p>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMenu;

NavMenu.propTypes = {
  onClick: PropTypes.func,
  scollToLinkA: PropTypes.func,
  scollToLinkB: PropTypes.func,
  scollToLinkC: PropTypes.func
};
