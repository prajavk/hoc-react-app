import React from "react";
import withLoader from "../../hoc/withLoader";

const Users = props => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {props.data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default withLoader(Users, "https://jsonplaceholder.typicode.com/users");
