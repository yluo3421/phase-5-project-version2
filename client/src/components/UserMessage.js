import React, { useEffect, useState, useCallback } from "react";

import CardForMessage from "./CardForMessage";

import Alert from "react-bootstrap/Alert";


function UserMessage({ user }) {
  const [userMessageData, setUserMessageData] = useState([]);

  const [editState, setEditState] = useState([]);
  const [showDeletedState, setShowDeletedState] = useState(false);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < userMessageData.length; i++) {
      arr.push(false);
    }
    setEditState(arr);
  }, [userMessageData]); 

  useEffect(() => {
    fetch(`/my-events/${user.id}`)
      .then((resp) => resp.json())
      .then((data) => setUserMessageData(data));
  }, [user]);

  let deleteEvent = (event) => {
    let id = event.event.id;
    let newArr = [...userMessageData];

    fetch(`/delete-my-event/${id}`, {
      method: "DELETE",
    })
      .then(setYourEventsData(newArr.filter((item) => item.id !== id)))
      .then(changeStateTrue());
  };

  const changeStateTrue = () => {
    setShowDeletedState(true);
    setTimeout(changeStateToFalse, 2000);
  };

  const changeStateToFalse = () => {
    setShowDeletedState(false);
  };

  return (
    <>
      {showDeletedState ? (
        <span className="text-center">
          <Alert variant={"danger"} className="fs-3 sticky-top">
            Your Event Was Deleted!
          </Alert>
        </span>
      ) : null}

      {userMessageData.length === 0 ? (
        <span className="text-center">
          <Alert variant={"danger"} className="fs-3 sticky-top">
            You Have No Events
          </Alert>
        </span>
      ) : (
        <CardForYourEvents events={userMessageData} handleDelete={deleteEvent} />
      )}
      <CardForMessage />
    </>
  );
}

export default UserMessage;
