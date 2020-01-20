import React from "react";

// import NavMenu from "./NavMenu";
import Sect1 from "./Sect1";
import Sect2 from "./Sect2";
import Sect3 from "./Sect3";

import "./scroll-style.css";

class ScrollContent extends React.Component {
  scrollRef1 = React.createRef();
  scrollRef2 = React.createRef();
  scrollRef3 = React.createRef();

  scrollLinkA = () => {
    console.info(`scrollLinkA this.scrollRef1`, this.scrollRef1);

    return this.scrollRef1.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  scrollLinkB = () => {
    console.info("scrollLInkB");
    return this.scrollRef2.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  scrollLinkC = () => {
    return this.scrollRef3.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="scroll-app">
          <div id="scroll-header">
            <span>This Is The Header</span>
            <button onClick={this.scrollLinkA}>Div1</button>
            <button onClick={this.scrollLinkB}>Div2</button>
            <button onClick={this.scrollLinkC}>Div3</button>
          </div>

          {/* <NavMenu
          scollToLinkA={this.scrollLinkA}
          scollToLinkB={this.scrollLinkB}
          scollToLinkC={this.scrollLinkC}
          /> */}
          <div id="scroll-content">
            <div className="scroll-post">
              <Sect1 forwardedRef={this.scrollRef1} />
            </div>
            <div className="scroll-post">
              <Sect2 ref={this.scrollRef2} />
            </div>
            <div className="scroll-post">
              <Sect3 ref={this.scrollRef3} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ScrollContent;
