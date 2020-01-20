import React from "react";

class NavMenu extends React.Component {
  scrollHere = e => {
    const refName = e.target.className;
    this.props.onClick(refName);
  };

  render() {
    const { scollToLinkA, scollToLinkB, scollToLinkC } = this.props;

    return (
      <nav>
        <ul>
          <li>
            <div onClick={scollToLinkA}>
              <h3>|</h3>
              <p>Div1</p>
            </div>
          </li>
          <li>
            <div onClick={scollToLinkB}>
              <h3>|</h3>
              <p>Div2</p>
            </div>
          </li>
          <li>
            <div onClick={scollToLinkC}>
              <h3>|</h3>
              <p>Div3</p>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMenu;
