import React, { Component } from "react";
import formatNumber from "format-number";
import userimg from "./images/user.png";
import "./user.css";

class UserInfo extends Component {
  state = {
    name: "Alex Bakery",
    description: "Software Engineer, Speaker, and Occasional Model",
    likes: "Cats, Wine, and Black dresses",
    location: "localhost",
    totalAmount: 2500701
  };
  render() {
    const { name, description, likes, location, totalAmount } = this.state;
    return (
      <div className="UserApp">
        <section className="User__img">
          <img src={userimg} width={400} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
          <div className="App__amount">
            <p className="App__amount--info">Total Amount</p>
            {formatNumber({ prefix: "$" })(totalAmount)}
          </div>
        </section>
      </div>
    );
  }
}

export default UserInfo;
