import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function CommentComp({ comment }) {
  const [commentState , setCommentState] = useState('')
  const [editState, setEditState] = useState(false);
  const [idk , setIdk] = useState(comment);
  // console.log(comment)
  let handleEdit = (e, comment) => {
    setEditState(!editState);
    // console.log(e.target.textContent)
    // console.log(comment)

    if (e.target.textContent === "Done Editing") {
      fetch(`/edit-comment/${comment.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: commentState,
          user_event_id: comment.user_event_id
        }),
      })
      .then(resp => resp.json())
    //   .then(data => console.log(data))
        .then(data => setIdk(data))
    }
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
              onChange={(e) => setCommentState(e.target.value)}
            >
              {comment.content}
            </textarea>
          </InputGroup>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item>
          {/* <span>{comment.content}</span> */}
          <span>{idk.content}</span>
        </ListGroup.Item>
      )}
      <Button variant="outline-dark" onClick={(e) => handleEdit(e, comment)}>
        {editState ? "Done Editing" : "Edit Comment"}
      </Button>
    </>
  );
}

export default CommentComp;
