// Header.js

import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.

const Header = () => (
  <header>
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        {/* <div className="navbar-header">
          <a className="navbar-brand" href="/">
            React Labs
          </a>
        </div> */}
        <ul className="nav navbar-nav">
          <li>
            <Link to="/hello">Hello</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/hocperson">Person</Link>
          </li>
          <li>
            <Link to="/hoccolor">Color</Link>
          </li>
          <li>
            <Link to="/hocpost">Posts</Link>
          </li>
          <li>
            <Link to="/hocaxios">Axios Posts</Link>
          </li>
          <li>
            <Link to="/hocfeed">Feeds</Link>
          </li>
          <li>
            <Link to="/hocbox">Box HOC</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/roster">Roster</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/comment">Comment</Link>
          </li>
          <li>
            <Link to="/tabs">Tabs</Link>
          </li>
          {/* <li>
            <Link to="/cal">Calculator</Link>
          </li> */}
          <li>
            <Link to="/asynchooks">AsyncHooks</Link>
          </li>
          <li>
            <Link to="/scrollcontent">Scroll</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
