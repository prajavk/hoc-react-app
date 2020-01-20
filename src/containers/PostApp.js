import React, { Component } from "react";
import Users from "../components/Posts/Users";
import Posts from "../components/Posts/Posts";

class PostApp extends Component {
  render() {
    return (
      <div>
        <Users />
        <Posts />
      </div>
    );
  }
}
export default PostApp;
