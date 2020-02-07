/* eslint-disable no-console */
import React from "react";
import NavMenu from "./NavMenu";
import Sect1 from "./Sect1";
import { Sect2 } from "./Sect2";
import { Sect3 } from "./Sect3";
import { Dummy } from "./Dummy";

class ScrollContent extends React.Component {
  // You can now get a ref directly to the DOM button:
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
            <span>Sticky Header</span>
            <button onClick={this.scrollLinkA} className="btn btn-primary">
              Div1
            </button>
            <button onClick={this.scrollLinkB} className="btn btn-published">
              Div2
            </button>
            <button onClick={this.scrollLinkC} className="btn btn-primary">
              Div3
            </button>
          </div>

          <NavMenu
            scollToLinkA={this.scrollLinkA}
            scollToLinkB={this.scrollLinkB}
            scollToLinkC={this.scrollLinkC}
          />
          <div id="scroll-content">
            <div className="scroll-post">
              <Dummy ref={ref => console.log("ref as function", ref)} />
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

/* eslint-enable no-console */
