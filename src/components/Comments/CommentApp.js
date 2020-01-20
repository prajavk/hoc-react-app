/* App uses nested comp's */
import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import GeoLocationApp from "./GeoLocationApp";
// import Spinner from "./Spinner";

const CommentApp = props => {
  return (
    <div className="ui container comments">
      <GeoLocationApp />

      <ApprovalCard>
        <div>
          <h4> Warning! </h4>
          Are you sure you want todo this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Science"
          timeAgo="Today at 4:45PM"
          content="Nice blog"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Math"
          timeAgo="Today at 2:00AM"
          content="I like subject"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Social"
          timeAgo="Yesterday at 5:45PM"
          content="Good comment"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
export default CommentApp;
