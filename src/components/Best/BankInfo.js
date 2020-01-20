import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./bank.css";

class BankInfo extends Component {
  state = {
    username: "Janny",
    totalAmount: 2500701
  };
  render() {
    const { totalAmount, username } = this.state;
    return (
      <div className="BankInfo">
        <img
          className="App__userpic"
          width={200}
          height={200}
          src={photographer}
          alt="user"
        />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>
      </div>
    );
  }
}

export default BankInfo;
