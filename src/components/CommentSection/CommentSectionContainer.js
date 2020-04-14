// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  const {comments} = props
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        // information.forEach(item => <Comment comment={item}/>)
        comments.map(comment => <Comment key={comment.username} comment={comment}/>)
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
