import React from "react";
import { Link } from "react-router-dom";
import ReversedName from "../components/ReversedName";
import "../theme/placeholder.css";
// import "../theme/page-loading.css";

const Hello = () => {
  const pageMask = (
    <div id="container">
      <div className="card">
        <div className="image loading" />
        <div className="bars">
          <div className="bar bar1 loading" />
          <div className="bar bar2 loading" />
        </div>
      </div>
      <div className="card">
        <div className="image loading" />
        <div className="bars">
          <div className="bar bar1 loading" />
          <div className="bar bar2 loading" />
        </div>
      </div>
    </div>
  );

  const facebookMask = (
    <div className="container">
      <div className="placeload">
        <div className="header">
          <div className="img loads" />
          <div className="header-content">
            <div className="content-shape loads" />
            <div className="content-shape loads" />
          </div>
        </div>
        <div className="image-placeholder loads" />
        <div className="placeholder-footer">
          <div className="footer-block">
            <div className="content-shape loads" />
            <div className="content-shape loads" />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="">
      <h1 className="display-3">
        <ReversedName>HELLO REACT</ReversedName>
      </h1>
      <Link to="/">Back</Link>
      <p> Facebook Content placeholders: A way to style waiting time</p>
      {pageMask}
      {facebookMask}
    </div>
  );
};

export default Hello;
