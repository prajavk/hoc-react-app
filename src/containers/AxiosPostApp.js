import React, { Component } from "react";
import PromisePost from "../components/Posts/PromisePost";
import AxiosPost from "../components/Posts/AxiosPost";

class PostApp extends Component {
  render() {
    return (
      <div>
        <AxiosPost />
        <hr />
        <h3>Axios Promise- Async Posts</h3>
        <PromisePost />
      </div>
    );
  }
}
export default PostApp;
