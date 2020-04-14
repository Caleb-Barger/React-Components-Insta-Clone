// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = ({comments}) => {
  // Add state for the comment
  // const [comment, setComment] = useState('')

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        // comments.map(comment => console.log(comment)) ISSUES BEGIN HERE
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
