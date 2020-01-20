import React from "react";
import withLoader from "../../hoc/withLoader";

const Posts = props => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {props.data.map(post => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default withLoader(
  Posts,
  "https://jsonplaceholder.typicode.com/posts?userId=1"
);
