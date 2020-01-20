import React, { Component } from "react";
import FeedItem from "./FeedItem";
import withLoading from "../../hoc/withLoading";

class Feed extends Component {
  render() {
    const { loadingTime } = this.props;
    return (
      <div className="feed">
        <code>Loading time {loadingTime} seconds</code>
        <FeedItem contacts={this.props.contacts} />
      </div>
    );
  }
}

export default withLoading("contacts")(Feed);
