import React, { useEffect, useState, useCallback } from "react";

import CardForMessage from "./CardForMessage";

import Alert from "react-bootstrap/Alert";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UserMessage({ user }) {

  const [showDeletedState, setShowDeletedState] = useState(false);

  let deleteEvent = (event) => {
    //console.log(event)
    let id = event.message.id;
    let newArr = [...userMessageData];

    fetch(`/usermessages/${id}`, {
      method: "DELETE",
    })
      .then(setUserMessageData(newArr.filter((item) => item.id !== id)))
      .then(changeStateTrue)
  };

  const changeStateTrue = () => {
    setShowDeletedState(true);
    setTimeout(changeStateToFalse, 2000);
  };

  const changeStateToFalse = () => {
    setShowDeletedState(false);
  };

  const [userMessageData, setUserMessageData] = useState([])
  useEffect(() => {
    fetch("/usermessages")
      .then((resp) => resp.json())
      .then((data) => setUserMessageData(data));
  }, []);

  const [messageToSubmit, setMessageToSubmit] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/usermessages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messageToSubmit,
        user_id: user.id
      }),
    }).then((r) => r.json())
    .then((data) => {
      let newData = [...userMessageData, data]
      setUserMessageData(newData)
    })
  }
  
  function handleUpdate(updatedMessage) {
    const updatedMessageArray = userMessageData.map((message) => {
      return message.id === updatedMessage.id ? updatedMessage : message;
    });
    setUserMessageData(updatedMessageArray);
  }

  return (
    <>
      {showDeletedState ? (
        <span className="text-center">
          <Alert variant={"danger"} className="fs-3 sticky-top">
            Your Message Was Deleted!
          </Alert>
        </span>
      ) : null}

      {userMessageData.length === 0 ? (
        <span className="text-center">
          <Alert variant={"danger"} className="fs-3 sticky-top">
            Be the First to Leave a Message
          </Alert>
        </span>
      ) : (
        <CardForMessage events={userMessageData} handleDelete={deleteEvent} onUpdateLike={handleUpdate} />
      )}
      
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Leave Your Comment</Form.Label>
          <Form.Control 
          placeholder="Which do you think is better"
          value={messageToSubmit}
          style={{width: "60%"}}
          onChange={(e) => {setMessageToSubmit(e.target.value)}} 
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Reply
        </Button>
        
      </Form>
    </>
  );
}

export default UserMessage;
