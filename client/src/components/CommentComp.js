import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function CommentComp({ comment }) {
  // const [commentState , setCommentState] = useState([])
  const [editState, setEditState] = useState(false);
  // console.log(comment)
  let handleEdit = (comment) => {
    console.log(comment);
  };

  return (
    <>
      {editState ? (
        <ListGroup.Item>
          <InputGroup className="mb-3">
            <textarea
              className="form-control"
              placeholder="Invite Friends"
              aria-label="With textarea"
            >
              {comment.content}
            </textarea>
          </InputGroup>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item>
          <span>{comment.content}</span>
        </ListGroup.Item>
      )}
      <Button variant="outline-dark" onClick={() => setEditState(!editState)}>
        Edit Comment
      </Button>
    </>
  );
}

export default CommentComp;
