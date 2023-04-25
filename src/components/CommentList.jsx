import React from "react";
import "./CommentList.css"

const CommentList = ({comments}) => {



  return (
    <div className="CommentList">
      <h2>Comments</h2>
      {comments && comments.length > 0 ?
          comments.map((comment,index) =>
            <div className={"comment"}>
              {comment}
            </div>
          ) : <h2>{'No Comments'}</h2>
      }
    </div>
  );
};

export default CommentList;