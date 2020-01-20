import React from "react";
import withAxiosLoader from "../../hoc/withAxiosLoader";

const AxiosPost = props => {
  return (
    <div>
      <h3>Axios - Get Posts</h3>
      <ul>
        {props.data.map(post => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default withAxiosLoader(
  AxiosPost,
  "https://jsonplaceholder.typicode.com/posts?userId=1"
);
