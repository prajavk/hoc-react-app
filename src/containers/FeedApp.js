import React, { Component } from "react";
import Feed from "../components/Feeds/Feed";

class FeedApp extends Component {
  state = { contacts: [] };

  componentDidMount() {
    fetch("https://api.randomuser.me/?results=20")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: user.email,
          gender: user.gender,
          city: user.location.city,
          cell: user.cell,
          thumbnail: user.picture.thumbnail
        }))
      )
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    return (
      <div className="">
        <Feed contacts={this.state.contacts} />
      </div>
    );
  }
}

export default FeedApp;
