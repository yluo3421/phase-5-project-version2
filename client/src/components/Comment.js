import React, { useEffect, useState, useCallback } from 'react'

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";



function Comment({ 
  comment,
  onCommentEdit,
  onCommentState,
}) {
  const [editInputState, setEditInputState] = useState('');
  const [editState, setEditState] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  return (
    <ListGroup.Item>
      <span className="h4">Comments:</span>
      <InputGroup>
        <textarea className="form-control" placeholder="Leave Your Comments" aria-label="With textarea" onChange={(e) => setEditInputState(e.target.value)}>
        {comment.content}
        </textarea>
        <span className="h5">{comment.content}</span>
      </InputGroup>
      <Button variant="outline-dark btn-sm" >
        Edit Comment
      </Button>
    </ListGroup.Item>
  )
}

export default Comment