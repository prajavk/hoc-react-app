// CommentList.js
import React from "react";

/* stateless
const CommentList = comments => (
  <ul>
    {comments.map(({ body, author }) =>
      <li>{body}-{author}</li>
    )}
  </ul>
)
*/

class CommentList extends React.Component {
  render() {
    return <ul> {this.props.comments.map(this.renderComment)} </ul>;
  }
  renderComment({ body, author }) {
    return (
      <li>
        {body}—{author}
      </li>
    );
  }
}

export default CommentList;
